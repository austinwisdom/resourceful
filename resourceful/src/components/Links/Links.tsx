import "./Links.scss";
import { Link } from "react-router-dom";


const Links = () => {
    return (
        <section className="links">
            <Link to="https://flukeout.github.io/" className="links__link link">
                <p className="links__title paragraph">CSS Diner game is awesome for learning!</p>
            </Link>
        </section>
    )
}

export default Links;