import "./PageNotFound.scss";
import { Link } from "react-router-dom";
import CSSJedi from "../../assets/images/CSS-jedi.png";
import JSNoda from "../../assets/images/JS-Noda.png";
import MandoReacts from "../../assets/images/Mando-reacts.png";
import blueBlob from "../../assets/images/blue-blob.png";


function getRandomNumber() {
    return Math.ceil(Math.random() * 3);
  }

const randomNumber =  getRandomNumber();

const PageNotFound = () => {
    return (
        <section className="page-notfound">
            <div className="page-notfound__message-container">
                <h1 className="page-notfound__title title">404 NOT FOUND</h1>
                { (randomNumber === 1)? 
                    (<div className="page-notfound__random">
                        <img src={CSSJedi} alt="Jedi icon" className="page-notfound__img"/>
                        <p className="page-notfound__message category-title">This is not the page you are looking for.</p>
                        <Link to='/' className="link">
                            <span className="span category-title">Go Home.</span>
                        </Link>
                    </div>)
                :(randomNumber === 2)? 
                   <div className="page-notfound__random">
                        <img src={JSNoda} alt="Yoda icon" className="page-notfound__img"/>
                        <p className="page-notfound__message category-title">The wrong page at you are.</p>
                        <Link to='/' className="link">
                            <span className="span category-title">Home go now.</span>
                        </Link>
                    </div>
                :
                    <div className="page-notfound__random">
                        <img src={MandoReacts} alt="Mandalorian icon" className="page-notfound__img"/>
                        <p className="page-notfound__message category-title">This is NOT the Way!</p>
                        <Link to='/' className="link">
                            <span className="span category-title">Go Home.</span>
                        </Link>
                    </div>

                }
            </div>
            <img src={blueBlob} className="page-notfound__floating-blob"/>
        </section>
    )
}

export default PageNotFound;