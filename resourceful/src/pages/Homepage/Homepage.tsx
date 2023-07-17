import "./Hompage.scss";
import htmlIcon from "../../assets/icons/html+css.png";
import redBlob from "../../assets/images/red-blob.png";
import { Link } from "react-router-dom";

const Homepage = () => {

    return (
        <section className="homepage">
            <Link to="/resources/HTML%20%26%20CSS" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">HTML + CSS</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/JAVASCRIPT" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">Javascript</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/REACT" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">ReactJS</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/NODE%20EXPRESS" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">NodeJS + Express</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/MySQL%20Knex" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">MySQL + Knex</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/OTHER" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={htmlIcon} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">Other</h3>
                </div>
                <img src={redBlob} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
        </section>
    );
};

export default Homepage;