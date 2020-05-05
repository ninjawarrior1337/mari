<template>
  <div class="hero is-dark is-fullheight">
    <div class="hero-head"></div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <h1 class="has-text-centered title">
                <ruby>
                    間利<rt>Mari</rt>
                </ruby>
            </h1>
            <section>
              <b-field>
                <b-upload v-model="dropfiles" multiple native drag-drop>
                  <h1 class="has-text-centered title">Drag and Drop Files Here to Seed</h1>
                  <h2 class="has-text-centered subtitle">Choose your files</h2>
                </b-upload>
              </b-field>
              <div class="tags">
                <span v-for="file in dropfiles" :key="file.name" class="tag is-info">
                  {{file.name}}
                  <button class="delete is-small" @click="dropfiles.pop(file)"></button>
                </span>
              </div>
              <button class="button is-primary is-large">Submit</button>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot"></div>
  </div>
</template>

<script>
import "../assets/bulma_config.scss"
export default {
  data() {
    return {
      dropfiles: null
    };
  }
};
</script>

<style>
</style>