import { Link } from "react-router-dom";
import "./Hompage.scss";

const Homepage = () => {

    return (
        <section className="homepage">
            <Link to="/resources/HTML%20%26%20CSS" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={`http://localhost:8080/icons/HTML.png`} alt="html and css icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">HTML + CSS</h3>
                </div>
                <img src={`http://localhost:8080/blobs/HTML.png`} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/JAVASCRIPT" className="homepage__category-container link">
                <div className="homepage__category">
                    <div className="homepage__icons">
                        <img src={`http://localhost:8080/icons/JAVA.png`} alt="javascript icon" className="homepage__icons-detail"/>
                    </div>
                    <h3 className="homepage__category-title category-title">Javascript</h3>
                </div>
                <img src={`http://localhost:8080/blobs/JAVA.png`} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/REACT" className="homepage__category-container link">
                <div className="homepage__category">
                    <div className="homepage__icons">
                        <img src={`http://localhost:8080/icons/REAC.png`} alt="react icon" className="homepage__icons-detail"/>
                    </div>
                    <h3 className="homepage__category-title category-title">ReactJS</h3>
                </div>
                <img src={`http://localhost:8080/blobs/REAC.png`} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/NODE%20EXPRESS" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={`http://localhost:8080/icons/NODE.png`} alt="node and express icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">NodeJS + Express</h3>
                </div>
                <img src={`http://localhost:8080/blobs/NODE.png`} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/MySQL%20Knex" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={`http://localhost:8080/icons/MySQ.png`} alt="mysql and knex icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">MySQL + Knex</h3>
                </div>
                <img src={`http://localhost:8080/blobs/MySQ.png`} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/OTHER" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={`http://localhost:8080/icons/OTHE.png`} alt="other icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">Other</h3>
                </div>
                <img src={`http://localhost:8080/blobs/OTHE.png`} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
            <Link to="/resources/GIT" className="homepage__category-container link">
                <div className="homepage__category">
                    <img src={`http://localhost:8080/icons/GIT.png`} alt="other icons" className="homepage__icons"/>
                    <h3 className="homepage__category-title category-title">GIT</h3>
                </div>
                <img src={`http://localhost:8080/blobs/GIT.png`} alt="floating blob" className="homepage__floating-blob"/> 
            </Link>
        </section>
    );
};

export default Homepage;