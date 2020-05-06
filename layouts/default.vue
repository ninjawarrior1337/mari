<template>
  <div class="hero is-dark is-fullheight" v-if="webrtc">
    <div class="hero-head"></div>
    <div class="hero-body">
        <nuxt></nuxt>
    </div>
    <div class="hero-foot"></div>
  </div>
  <div class="hero is-dark is-fullheight" v-else>
      <div class="hero-body">
          <div class="container">
              <h1 class="title has-text-centered">This only works on web browsers that support WebRTC, sorry.</h1>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            webrtc: false,
        }
    },
    mounted() {
      if(this.$webrtcsupport) {
          this.webrtc = true
      }
  }
};
</script>

<style>
body::-webkit-scrollbar {
    display: none;
}
</style>