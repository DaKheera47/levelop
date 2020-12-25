import axios from "axios";
import React, { useState } from "react";
import querystring from "querystring";
import Cookies from "universal-cookie";
import "./Login.sass";

export default function Login() {
    const cookies = new Cookies();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

    const instance = axios.create({
        withCredentials: true,
    });

    const handleLogin = (evt) => {
        evt.preventDefault();

        instance
            .post(
                "https://stormy-sands-86791.herokuapp.com/login",
                querystring.stringify({ email: email, password: password })
            )
            .then(function (response) {
                //handle success
                console.log(response);

                // cookies.set("jwt", res.)

                console.log(cookies.get("jwt"));
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
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
                    Don't have an account? <a>Sign Up Instead</a>
                </p>
                <button type="submit" className="confirmation-btn login-btn">
                    Login
                </button>
            </form>
        </div>
    );
}
