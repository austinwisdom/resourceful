import "./PageNotFound.scss";
import { Link } from "react-router-dom";
import CSSJedi from "../../assets/images/CSS-jedi.png";
import blueBlob from "../../assets/images/blue-blob.png";


const PageNotFound = () => {
    return (
        <section className="page-notfound">
            <div className="page-notfound__message-container">
                <h1 className="page-notfound__title title">404 NOT FOUND</h1>
                <img src={CSSJedi} alt="Jedi icon" className="page-notfound__img"/>
                <p className="page-notfound__message category-title">This is not the page you are looking for.</p>
                <Link to='/' className="link">
                    <span className="span category-title">Go Home.</span>
                </Link>
            </div>
            <img src={blueBlob} className="page-notfound__floating-blob"/>
        </section>
    )
}

export default PageNotFound;