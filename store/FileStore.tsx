import {observable, action, decorate, autorun} from "mobx"
import { useStaticRendering } from "mobx-react"
useStaticRendering(typeof window === 'undefined')

class FileStore {
    @observable files: Array<File>

    constructor() {
        this.files = []
    }
    
    @action
    setFilesFromList(f: FileList) {
        console.log(`adding: ${f}`)
        this.files = Array.from(f)
    }

    @action
    deleteFile(f: File) {
        let newFiles = this.files.filter((file) => {
            return file != f
        })
        this.files = newFiles
    }
}
    
export default FileStore