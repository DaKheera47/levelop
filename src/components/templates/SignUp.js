import React, { useContext, useState } from "react";
import "./Login.sass";
import { Link } from "react-router-dom";
import { ApiContext } from "../contexts/ApiContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const { SignUp } = useContext(ApiContext);

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

    const handleSignUp = (evt) => {
        evt.preventDefault();
        SignUp(email, password, username);
    };

    return (
        <div className="login-page">
            <div className="login-info-container">
                <h1 className="login-info">Sign Up Now</h1>
                <p className="login-subinfo">
                    Please fill out the details below to sign up
                </p>
            </div>

            <form className="login-form" onSubmit={handleSignUp}>
                <div className="login-input-field-container">
                    <input
                        type="text"
                        placeholder="Username"
                        name="Username"
                        id="Username"
                        className="login-input-field"
                        onChange={(evt) => {
                            handleChange(evt, setUsername);
                        }}
                    />
                </div>
                <div className="login-input-field-container">
                    <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        id="email"
                        className="login-input-field"
                        onChange={(evt) => {
                            handleChange(evt, setEmail);
                        }}
                    />
                </div>
                <div className="login-input-field-container">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className="login-input-field"
                        onChange={(evt) => {
                            handleChange(evt, setPassword);
                        }}
                    />
                </div>

                <p className="login-subinfo">
                    Already have an account?
                    <Link to="/login"> Log in Instead</Link>
                </p>
                <button type="submit" className="confirmation-btn login-btn">
                    Sign Up
                </button>
            </form>
        </div>
    );
}
