import React from "react";
import Clipboard from "react-clipboard.js";
import ReactTooltip from "react-tooltip";
import { Torrent } from "webtorrent";
import FileCard from "./fileCard";

export enum TorrentStatus {
    Downloading = "Torrenting Files",
    Seeding = "Seeding Files",
    Waiting = "Waiting For Seeds",
}

interface Props {
    torrent: Torrent;
    status: TorrentStatus;
}

interface State {
    copyStatus: string;
    isSSR: boolean;
}

export default class WebTorrentStatus extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            copyStatus: "Copy Link",
            isSSR: true,
        };
    }
    componentDidMount() {
        this.setState({
            isSSR: false,
        });
    }
    render() {
        const props = this.props;
        return (
            <div className="hero is-fullheight is-dark">
                <div className="hero-body has-text-centered">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <h1 className="title">{props.status}</h1>
                                <p className="subtitle">
                                    Hash: {props.torrent?.infoHash}
                                </p>
                                {this.state.isSSR ? null : (
                                    <>
                                        <Clipboard
                                            data-tip
                                            data-for="copyurl"
                                            component="button"
                                            className="button is-primary"
                                            data-clipboard-text={
                                                `${window.location.origin.toString()}/seed/${
                                                    this.props.torrent?.infoHash
                                                }`
                                            }
                                            onClick={() => {
                                                this.setState({
                                                    copyStatus: "Link Copied!",
                                                });
                                                setTimeout(() => {
                                                    this.setState({
                                                        copyStatus: "Copy Link",
                                                    });
                                                }, 2000);
                                            }}
                                        >
                                            Copy Link
                                        </Clipboard>
                                        <ReactTooltip
                                            id="copyurl"
                                            backgroundColor="#AE58EB"
                                            effect="solid"
                                            place="right"
                                        >
                                            <span>{this.state.copyStatus}</span>
                                        </ReactTooltip>
                                    </>
                                )}
                            </div>
                            <div className="column">
                                <p className="subtitle">
                                    Peers: {props.torrent?.numPeers}
                                </p>
                                <p className="subtitle">
                                    Download/Upload Speed:{" "}
                                    {(
                                        props.torrent?.downloadSpeed / 1e6
                                    ).toFixed(2)}{" "}
                                    MB/s /{" "}
                                    {(props.torrent?.uploadSpeed / 1e6).toFixed(
                                        2
                                    )}{" "}
                                    MB/s
                                </p>
                                {props.torrent?.files.map((f) => {
                                    return (
                                        <FileCard
                                            file={f}
                                            key={f.name}
                                        ></FileCard>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
