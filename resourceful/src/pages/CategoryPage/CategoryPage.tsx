import "./CategoryPage.scss";
import htmlIcon from "../../assets/icons/html+css.png";
import redBlob from "../../assets/images/red-blob.png";
import Links from "../../components/Links/Links";


const CategoryPage = () => {
    return (
        <section className="category">
            <div className="category__main-container">
                <div className="category__header">
                    <img src={htmlIcon} alt="html and css icons" className="category__icon"/>
                    <h2 className="category__title title">HTML + CSS + SASS</h2>
                </div>
                <div className="category__content-wrapper">
                    <div className="category__subsection">
                        <h4 className="category__subtitle subtitle">CSS Resources</h4>
                        <Links />
                    </div>
                </div>       
            </div>
            <img src={redBlob} alt="red blob" className="category__blob"/>
        </section>
    )
};

export default CategoryPage;