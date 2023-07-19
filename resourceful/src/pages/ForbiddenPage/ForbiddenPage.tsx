import "./ForbiddenPage.scss";
import { Link } from "react-router-dom";
import JSNoda from "../../assets/images/JS-Noda.png";
import blueBlob from "../../assets/images/blue-blob.png";


const ForbiddenPage = () => {
    return (
        <section className="forbidden">
            <div className="forbidden__message-container">
                <h1 className="forbidden__title title">403 FORBIDDEN</h1>
                <img src={JSNoda} alt="Jedi icon" className="forbidden__img"/>
                <p className="forbidden__message category-title">Access you do not have.</p>
                <Link to='/' className="link">
                    <span className="span category-title">Account you must create.</span>
                </Link>
            </div>
            <img src={blueBlob} className="forbidden__floating-blob"/>
        </section>
    )
}

export default ForbiddenPage;