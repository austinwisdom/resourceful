import "./SignUpPage.scss";
import authIcons from "../../assets/images/auth-icons.png";
import redBlob from "../../assets/images/red-blob.png";
import { Link } from "react-router-dom";


const SignUpPage = () => {
    return (
        <section className="sign-up">
            <div className="sign-up__img-wrapper">
                <img src={authIcons} alt="icons" className="sign-up__img-icons"/>
                <img src={redBlob} alt="blob" className="sign-up__blob"/>
            </div>
            <form className="sign-up__form">
                <div className="sign-up__header">
                    <h1 className="sign-up__title page-header">Create account</h1>
                    <p className="sign-up__subheader paragraph">Already have an account?
                        <Link to="/log-in" className="link">
                            <span className="span"> Log in.</span>
                        </Link>
                    </p>
                </div>
                <div className="sign-up__names">
                    <div className="sign-up__field-container">
                        <label htmlFor="firstName" className="sign-up__label paragraph">First name</label>
                        <input 
                            name="firstName" 
                            type="text" 
                            id="firstName" 
                            className="form-field"
                        />
                    </div>
                    <div className="sign-up__field-container">
                        <label htmlFor="lastName" className="sign-up__label paragraph">Last name</label>
                        <input 
                            name="lastName" 
                            type="text" 
                            id="lastName" 
                            className="form-field"
                        />
                    </div>
                </div>
                <div className="sign-up__field-container">
                        <label htmlFor="username" className="sign-up__label paragraph">Username</label>
                        <input 
                            name="username" 
                            type="text" 
                            id="username" 
                            className="form-field"
                        />
                    </div>
                    <div className="sign-up__field-container">
                        <label htmlFor="email" className="sign-up__label paragraph">E-mail</label>
                        <input 
                            name="email" 
                            type="text" 
                            id="email" 
                            className="form-field"
                        />
                    </div>
                    <div className="sign-up__field-container">
                        <label htmlFor="password" className="sign-up__label paragraph">Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            id="password" 
                            className="form-field"
                        />
                    </div>
                    <div className="sign-up__buttons">
                        <Link to="/" className="sign-up__link">
                            <button className="sign-up__button secondary-button button-large label">Back</button>
                        </Link>
                        <Link to="#" className="sign-up__link">
                            <button className="sign-up__button primary-button button-large label">Sign up</button>
                        </Link>
                    </div>
            </form>
        </section>
    )
}

export default SignUpPage;