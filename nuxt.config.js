export default {
    build: {
        mode: "spa",
        extend(config, {isDev, isClient}) {
            config.node = {
                fs: "empty"
            }
        }
    },
    buildModules: [
        ["@nuxtjs/fontawesome", {component: "fa"}]
    ],
    fontawesome: {
        icons: {
            solid: ["faArrowRight"]
        }
    },
    modules: [
        ["nuxt-buefy", {
            defaultIconComponent: 'fa',
            defaultIconPack: 'fas',
        }]
    ],
    plugins: [
        {src: "~plugins/webtorrent.js", mode: "client"}
    ],
    server: {
        port: 5000
    }
}