import React from "react"
import FileTags from "./tags";
import {observer} from "mobx-react"
import { FileStoreContext } from "../pages/_app";

interface State {
    files: Array<File>
}

class FileUpload extends React.Component<{}, State, {}> {
    fileInput: React.RefObject<HTMLInputElement>;
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
        this.fileInput = React.createRef<HTMLInputElement>()
    }
    render() {
        return (
            <>
            <div className="field">
                <div className="file is-centered is-boxed is-primary has-name is-large">
                    <label className="file-label">
                    <FileStoreContext.Consumer>
                    {
                        (fs) => 
                        <input ref={this.fileInput} className="file-input" type="file" name="resume" multiple onChange={(e) => {
                            e.preventDefault()
                            fs.setFilesFromList(this.fileInput.current.files)
                        }}/>
                    }
                    </FileStoreContext.Consumer>
                    <span className="file-cta">
                        <span className="file-icon">
                            <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">
                            Upload Files Here
                        </span>
                    </span>
                    </label>
                </div>
            </div>
            <FileTags></FileTags>
            </>
        )
    }
}

export default FileUpload