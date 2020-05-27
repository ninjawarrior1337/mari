import {observable, action, decorate, autorun} from "mobx"

class FileStore {
    files: Array<File>
    testString: string

    constructor() {
        this.files = []
    }
    
    setFilesFromList(f: FileList) {
        this.files = Array.from(f)
    }

    deleteFile(f: File) {
        let newFiles = this.files.filter((file) => {
            return file != f
        })
        this.files = newFiles
    }

    setString(s: string) {
        this.testString = s
    }
}

decorate(FileStore, {
    files: observable,
    testString: observable,
    setFilesFromList: action.bound,
    deleteFile: action.bound,
    setString: action,
})
    
export default FileStore