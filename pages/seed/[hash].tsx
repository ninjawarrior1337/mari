import { GetServerSideProps } from "next";
import { SingletonRouter, withRouter } from "next/router";
import React from "react";
import WebTorrent, { Instance, Torrent } from "webtorrent";
import Error from "../../components/Error";
import WebTorrentStatus, { TorrentStatus } from "../../components/webtorrentStatus";

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            hash: context.params["hash"].toString()
        }
    }
}

interface State {
    error: string
    torrent: Torrent
    status: TorrentStatus
}

class SeedFromHash extends React.Component<{router?: SingletonRouter, hash: string}, State> {
    wt: Instance
    statusUpdater: number
    constructor(props) {
        super(props)
        this.wt = new WebTorrent()
        this.state = {
            error: "",
            torrent: null,
            status: TorrentStatus.Waiting
        }
    }
    componentDidMount() {
        const hash = this.props.hash
        this.wt.on("error", (e) => {
            if(e)
                this.setState({error: e.toString()})
        })
        console.log(hash)
        if(hash)
        {
            this.wt.add(hash, {
                announce: [
                    "wss://tracker.openwebtorrent.com",
                    "wss://tracker.btorrent.xyz",
                    "wss://tracker.fastcast.nz",
                ]
            }, (torr) => {
                this.setState({torrent: torr, status: TorrentStatus.Downloading})
                torr.on("done", () => {
                    this.setState({status: TorrentStatus.Seeding})
                })
                this.statusUpdater = window.setInterval(() => {
                    this.setState({torrent: torr})
                }, 1000)
            })
        }
    }
    componentWillUnmount() {
        window.clearInterval(this.statusUpdater)
    }
    render() {
        if(this.state.error) {
            return (
                <Error error={this.state.error}></Error>
            )
        }
        return (
            <WebTorrentStatus status={this.state.status} torrent={this.state.torrent}></WebTorrentStatus>
        )
    }
}

export default withRouter(SeedFromHash)