import "./LogInPage.scss";
import { Link } from "react-router-dom";


const LogInPage = () => {
    return (
        <section className="log-in">
            <div className="log-in__img-wrapper">
                
            </div>
            <form className="log-in__form">
                <h1 className="log-in__title page-header">Welcome back</h1>
                <p className="log-in__subheader paragraph">First time here? <span className="span">Create account.</span></p>
                <div className="log-in__field-container">
                        <label htmlFor="username" className="log-in__label paragraph">Username</label>
                        <input 
                            name="username" 
                            type="text" 
                            id="username" 
                            className="form-field"
                        />
                    </div>
                    <div className="log-in__field-container">
                        <label htmlFor="password" className="log-in__label paragraph">Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            id="password" 
                            className="form-field"
                        />
                    </div>
                    <div className="log-in__buttons">
                        <Link to="/" className="log-in__link">
                            <button className="log-in__button secondary-button button-large label">Back</button>
                        </Link>
                        <Link to="/" className="log-in__link">
                            <button className="log-in__button primary-button button-large label">Sign up</button>
                        </Link>
                    </div>
            </form>
        </section>
    )
}

export default LogInPage;