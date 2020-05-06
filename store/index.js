export const state = () => {
    files: []
    torrentHash: ""
    torrent: {}
}

export const mutations = {
    updateFiles (state, files) {
        state.files = files
    },
    deleteFile(state, file) {
        state.files.splice(state.files.indexOf(file), 1)
    },

    setTorrentHash(state, torrentHash) {
        state.torrentHash = torrentHash
    },

    setTorrent(state, torrent) {
        state.torrent = torrent
    }
}