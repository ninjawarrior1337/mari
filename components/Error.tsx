import Link from "next/link";

interface Props {
    error: string;
}
export default function Error(props: Props) {
    return (
        <div className="hero is-fullheight is-danger">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <h1 className="title">{props.error}</h1>
                    <Link href="/">
                        <a className="button is-success">
                            Go Back
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
