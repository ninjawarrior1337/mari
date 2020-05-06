export const state = () => {
    files: []
}

export const mutations = {
    updateFiles (state, files) {
        state.files = files
    },
    deleteFile(state, file) {
        state.files.splice(state.files.indexOf(file), 1)
    }
}