import FileUpload from "../components/fileUpload";
import Mari from "../components/mari";
import Link from "next/link"

export default function Index() {
    return (
        <div className="hero is-fullheight is-dark">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <Mari></Mari>
                    <FileUpload/>
                    <Link href="/seed">
                        <a className="button is-success">
                            <p className="subtitle">Seed</p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}