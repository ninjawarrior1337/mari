import "../assets/styles.scss"
import App, { AppProps } from "next/app"
import FileStore from "../store/FileStore"
import React from "react"
import "mobx-react/batchingForReactDom"
import {autorun } from "mobx"

export const FileStoreContext: React.Context<FileStore> = React.createContext(null)

export default class MyApp extends App<AppProps,{},{}> {
    fileStore: FileStore 
    constructor(appProps: AppProps) {
        super(appProps)
        this.fileStore = new FileStore()
    }

    componentDidMount() {
        window["fileStore"] = this.fileStore
        autorun(() => {
            console.log(this.fileStore.files)
        })
    }
    
    render() {
        const {Component, pageProps} = this.props
        return (
            <FileStoreContext.Provider value={this.fileStore}>
                <Component {...pageProps}></Component>
            </FileStoreContext.Provider>
        )
    }
}