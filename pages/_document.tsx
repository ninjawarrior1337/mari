import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MariDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}