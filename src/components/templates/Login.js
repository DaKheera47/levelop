import React, { useContext, useState } from "react";
import "./Login.sass";
import { Link } from "react-router-dom";
import { ApiContext } from "../contexts/ApiContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { Login } = useContext(ApiContext);

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

    const handleLogin = (evt) => {
        evt.preventDefault();
        Login(email, password);
    };

    return (
        <div className="login-page">
            <div className="login-info-container">
                <h1 className="login-info">Log In Now</h1>
                <p className="login-subinfo">
                    Please fill out the details below to log in
                </p>
            </div>

            <form className="login-form" onSubmit={handleLogin}>
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
                    Don't have an account?{" "}
                    <Link to="/signup">Sign Up Instead</Link>
                </p>
                <button type="submit" className="confirmation-btn login-btn">
                    Login
                </button>
            </form>
        </div>
    );
}
