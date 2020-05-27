import FileUpload from "../components/fileUpload";
import Mari from "../components/mari";

export default function Index() {
    return (
        <div className="hero is-fullheight is-dark">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <Mari></Mari>
                    <FileUpload/>
                </div>
            </div>
        </div>
    )
}