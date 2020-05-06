<template>
  <div class="container has-text-centered">
    <div class="columns">
      <div class="column">
        <h1 class="title">{{name}}</h1>
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div class="container column is-half" v-for="file in files" :key="file.name">
            <div class="card">
              <div class="card-content">
                <b>Filename: {{file.name}}</b>
                <b-progress type="is-success" :value="file.progress*100"></b-progress>
              </div>
              <footer class="card-footer" v-if="file.progress==1">
                <a class="card-footer-item">Download</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "Waiting",
      files: null
    };
  },
  computed: {
    torrentHash() {
      return this.$store.state.torrentHash;
    },
    torrent() {
      return this.$store.state.torrent;
    },
    name() {
      if (this.torrent) {
        return this.torrent.name;
      } else {
        return this.state;
      }
    },
  },
  mounted() {
    this.$store.commit("setTorrentHash", this.$route.params.hash);
    this.$wt.on("error", err => {
      this.state = err;
    });
    this.$wt.on("download", () => {
        this.updateDownloadStatus()
    });
    if (!this.$store.state.torrent) {
      this.startTorrenting();
    }
  },
  methods: {
    startTorrenting() {
      this.$wt.add(this.$store.state.torrentHash, (torrent) => {
        this.$store.commit("setTorrent", torrent);
      });
    },
    updateDownloadStatus() {
        return this.torrent.files;
    }
  }
};
</script>

<style>
.card {
  border-radius: 5px;
}
</style>