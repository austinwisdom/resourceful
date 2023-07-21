import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { LoginError, SetUserInfo, SetBoolean } from "../../types/types";
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

    const signUpSuccess = () => toast.success("User successfully signed-up!")
    const signUpFail = (errorMessage: string) => toast.error (`Sign-up failed with error: ${errorMessage}`)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios
            .post("https://backend.resourceful.tips/users/signup", {firstName: firstName, lastName: lastName, email: email, userName: username, password: password})
            .then(() => {
                setSignedUp(true)
                signUpSuccess()
            })
            .catch ((error: AxiosError<LoginError>) => {
              const errorMessage = error.response?.data?.message ?? "Unknown error occurred";
              signUpFail(errorMessage)
        })
    }

    useEffect(()=> { 
        if (signedUp) { 
            const timeout = setTimeout(() => { 
                navigate("/log-in")
               }, 3000);
               return () => clearTimeout(timeout)
        }
      }, [signedUp, navigate])

    const handleChangeFirstName = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            value: string };
        const value = target.value;
        setFirstName(value);
      }

    const handleChangeLastName = (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      const target = event.target as typeof event.target & {
          value: string };
      const value = target.value;
      setLastName(value);
    }
    
    const handleChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            value: string };
        const value = target.value;
        setUsername(value);
      }
    
    const handleChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      const target = event.target as typeof event.target & {
          value: string };
      const value = target.value;
      setEmail(value);
    }

    const handleChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      const target = event.target as typeof event.target & {
          value: string };
      const value = target.value;
      setPassword(value);
    }

    return (
        <section className="sign-up">
            <div className="sign-up__img-wrapper">
                <img src={authIcons} alt="icons" className="sign-up__img-icons"/>
                <img src={redBlob} alt="blob" className="sign-up__blob"/>
            </div>
            <form className="sign-up__form" onSubmit={handleSubmit}>
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
                            onChange={handleChangeFirstName}
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
                            onChange={handleChangeLastName}
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
                            onChange={handleChangeUsername}
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
                            onChange={handleChangeEmail}
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
                            onChange={handleChangePassword}
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