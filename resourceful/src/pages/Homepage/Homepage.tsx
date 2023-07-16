import "./Hompage.scss";
import htmlIcon from "../../assets/icons/html+css.png";
import redBlob from "../../assets/images/red-blob.png";
import { Link } from "react-router-dom";

const Homepage = () => {

    return (
        <section className="homepage">
            <Link to="/html+css" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">HTML + CSS</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/html+css" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">Placeholder</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/html+css" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">Placeholder</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/html+css" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">Placeholder</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/html+css" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">Placeholder</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/html+css" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">Placeholder</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
        </section>
    );
};

export default Homepage;