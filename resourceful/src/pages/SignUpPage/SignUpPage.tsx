import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { inputValue, signupSubmit } from "../../utilities/handlers";
import {  SetUserInfo, SetBoolean} from "../../types/types";
import authIcons from "../../assets/images/auth-icons.png";
import redBlob from "../../assets/images/red-blob.png";
import 'react-toastify/dist/ReactToastify.css';
import "./SignUpPage.scss";


const SignUpPage = () => {
    const navigate =  useNavigate()
    
    const [firstName, setFirstName]: [username: string, setUsername: SetUserInfo] = useState("");
    const [lastName, setLastName]: [password: string, setPassword: SetUserInfo] = useState("");
    const [email, setEmail]: [username: string, setUsername: SetUserInfo] = useState("");
    const [username, setUsername]: [username: string, setUsername: SetUserInfo] = useState("");
    const [password, setPassword]: [password: string, setPassword: SetUserInfo] = useState("");
    const [signedUp, setSignedUp]: [signedUp: boolean, setSignedUp: SetBoolean ] = useState(false)
    
      useEffect(()=> { 
          if (signedUp) { 
              const timeout = setTimeout(() => { 
                  navigate("/log-in")
                 }, 3000);
                 return () => clearTimeout(timeout)
          }
        }, [signedUp, navigate])

    return (
        <section className="sign-up">
            <div className="sign-up__img-wrapper">
                <img src={authIcons} alt="icons" className="sign-up__img-icons"/>
                <img src={redBlob} alt="blob" className="sign-up__blob"/>
            </div>
            <form className="sign-up__form" onSubmit={(e) => signupSubmit(e, firstName, lastName, email, username, password, setSignedUp)}>
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
                            value={firstName}
                            onChange={(e) => setFirstName(inputValue(e))}
                        />
                    </div>
                    <div className="sign-up__field-container">
                        <label htmlFor="lastName" className="sign-up__label paragraph">Last name</label>
                        <input 
                            name="lastName" 
                            type="text" 
                            id="lastName" 
                            className="form-field"
                            value={lastName}
                            onChange={(e) => setLastName(inputValue(e))}
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
                            value={username}
                            onChange={(e) => setUsername(inputValue(e))}
                        />
                    </div>
                    <div className="sign-up__field-container">
                        <label htmlFor="email" className="sign-up__label paragraph">E-mail</label>
                        <input 
                            name="email" 
                            type="text" 
                            id="email" 
                            className="form-field"
                            value={email}
                            onChange={(e) => setEmail(inputValue(e))}
                        />
                    </div>
                    <div className="sign-up__field-container">
                        <label htmlFor="password" className="sign-up__label paragraph">Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            id="password" 
                            className="form-field"
                            value={password}
                            onChange={(e) => setPassword(inputValue(e))}
                        />
                    </div>
                    <div className="sign-up__buttons">
                        <button type="submit" className="sign-up__button primary-button button-large label">Sign up</button> 
                    </div>
            </form>
            <ToastContainer position="bottom-center" theme="colored" hideProgressBar={true} className="log-in__notification"/>
        </section>
    )}


export default SignUpPage;