<template>
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column is-half">
            <h1 class="title">
                <ruby>
                    間利<rt>Mari</rt>
                </ruby>
            </h1>
            <div class="container">
              <b-field>
                <b-upload multiple native drag-drop @input="updateFiles">
                  <h1 class="title has-text-centered">Drag and Drop Files Here to Seed</h1>
                  <h2 class="subtitle has-text-centered">Choose your files</h2>
                </b-upload>
              </b-field>
              <div class="tags">
                <span v-for="file in files" :key="file.name" class="tag is-info">
                  {{file.name}}
                  <button class="delete is-small" @click="$store.commit('deleteFile', file)"></button>
                </span>
              </div>
              <button class="button is-primary is-large"><span>Submit</span><b-icon pack="fas" icon="arrow-right"></b-icon></button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import {mapState} from "vuex"
import "../assets/bulma_config.scss"
export default {
  data() {
    return {};
  },
  computed: {
      files() {
          return this.$store.state.files
      }
  },
  methods: {
      updateFiles(val) {
          this.$store.commit("updateFiles", val)
      }
  }
};
</script>

<style>
</style>