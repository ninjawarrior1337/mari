import "../assets/styles.scss";
import App, { AppProps } from "next/app";
import Head from "next/head"
import FileStore from "../store/FileStore";
import React from "react";
import "mobx-react/batchingForReactDom";
import { autorun, observable } from "mobx";

export const FileStoreContext: React.Context<FileStore> = React.createContext(
    null
);
export const fileStore = new FileStore();

export default class MyApp extends App<AppProps, {}, {}> {
    constructor(appProps: AppProps) {
        super(appProps);
    }

    componentDidMount() {
        window["fileStore"] = fileStore;
        autorun(() => {
            console.log(fileStore.files);
        });
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Mari - A Peer to Peer Filesharing Service</title>
                    <meta property="og:title" content="Mari" />
                    <meta property="og:description" content="A Peer to Peer Filesharing Service" />
                    <meta property="og:type" content="website"/>
                </Head>
                <FileStoreContext.Provider value={fileStore}>
                    <Component {...pageProps}></Component>
                </FileStoreContext.Provider>
            </>
        );
    }
}
