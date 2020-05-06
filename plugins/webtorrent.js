import Vue from "vue"
const webtorrent = require("webtorrent")

Vue.prototype.$wt = new webtorrent()
Vue.prototype.$webrtcsupport = webtorrent.WEBRTC_SUPPORT