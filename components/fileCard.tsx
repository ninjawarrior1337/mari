import { useEffect, useState } from "react";
import { TorrentFile } from "webtorrent";

interface Props {
    file: TorrentFile
}
export default function FileCard(props: Props) {
    const [url, setURL] = useState("");
    useEffect(() => {
        if(props.file.progress==1 && url == "") {
            props.file.getBlobURL((err, url) => {
                setURL(url)
            })
        }
    })
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {props.file.name}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <progress className="progress is-info" value={props.file.progress} max={1}>
                    </progress>
                    <p className="subtitle has-text-dark">{(props.file.downloaded/1e6).toFixed(2)}/{(props.file.length/1e6).toFixed(2)} MB</p>
                    {
                        props.file.progress==1?<a className="button is-success" href={url} target="_blank" download={props.file.name}>Save</a> : null
                    }
                </div>
            </div>
        </div>
    )
}