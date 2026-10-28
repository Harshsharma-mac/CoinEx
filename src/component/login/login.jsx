// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
    faUser,
    faLock,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGoogle,
    faFacebook,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./login.css";
const Login = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
        <div className={`container ${active ? "active" : ""}`}>
        <div className="form-box login">
            <form action="#" onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="forgot-link">
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="btn" onClick={handleLogin}>Login</button>
                <p>or login with social platforms</p>
                <div className="social-icons">
                    <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </form>
        </div>

        <div className="form-box register">
            <form action="#">
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <FontAwesomeIcon icon={faEnvelope} />
                 </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <button type="button" className ="loginbtn">Register Account</button>
                <p>or register with social platforms</p>
                <div className="social-icons">
                    <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </form>
        </div>

        <div className="toggle-box">
            <div className="toggle-panel toggle-left">
                <h2>Coin<span>Ex</span></h2>
                <h1>Hello, Welcome!</h1>
                <p>Don't have an account?</p>
                <button className="register-btn" type="button" onClick={() => setActive(true)}>Sign up</button>
            </div>

            <div className="toggle-panel toggle-right">
                <h2>Coin<span>Ex</span></h2>
                <h1>Welcome Back!</h1>
                <p>Already have an account?</p>
                <button className="login-btn" type="button" onClick={() => setActive(false)}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login



  