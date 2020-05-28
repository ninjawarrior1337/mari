import { observer } from "mobx-react";
import { FileStoreContext } from "../pages/_app";
import { useContext } from "react";

function Tags(props) {
    const fs = useContext(FileStoreContext);
    return (
        <div className="columns is-centered">
            <div className="column is-half">
                <div className="tags">
                    {fs.files.map((f) => (
                        <span className="tag is-primary is-medium" key={f.name}>
                            {f.name}
                            <button
                                className="delete"
                                onClick={() => {
                                    fs.deleteFile(f);
                                }}
                            ></button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default observer(Tags);
