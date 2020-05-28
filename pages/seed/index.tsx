import WebTorrent, { Instance, Torrent } from "webtorrent";
import React, { useContext } from "react";
import { observer } from "mobx-react";
import { fileStore } from "../_app";
import Error from "../../components/Error";
import FileCard from "../../components/fileCard";
import WebtorrentStatus, { TorrentStatus } from "../../components/webtorrentStatus";

interface State {
    error: string
    torrent: Torrent
}

@observer
export default class SeedFromFiles extends React.Component<{},State> {
    wt: Instance;
    statusUpdater: number
    constructor(props) {
        super(props);
        this.wt = new WebTorrent();
        this.state = {
            error: "",
            torrent: null
        }
    }
    componentDidMount() {
        if(fileStore.files.length <= 0) {
            this.setState({error: "Error: No Files Selected"})
        } else {
            this.wt.on("error", (e) => {
                this.setState({error: e.toString()})
            })
            this.wt.seed(fileStore.files, (torrent) => {
                this.setState({torrent: torrent})
                this.statusUpdater = window.setInterval(() => {
                    this.setState({torrent: torrent})
                }, 1000)
            })
        }
    }
    componentWillUnmount() {
        window.clearInterval(this.statusUpdater)
    }
    render() {
        if(this.state.error) {
            return <Error error={this.state.error}></Error>
        }
        return (
            <WebtorrentStatus torrent={this.state.torrent} status={TorrentStatus.Seeding}></WebtorrentStatus>
        );
    }
}
