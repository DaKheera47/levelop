import axios from "axios";
import React, { useState } from "react";
import querystring from "querystring";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

    const handleLogin = (evt) => {
        evt.preventDefault();

        axios
            .post(
                "http://ammar-228df1a1.localhost.run/login",
                querystring.stringify({ email: email, password: password })
            )
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    id="email"
                    onChange={(evt) => {
                        handleChange(evt, setEmail);
                    }}
                />
                <input
                    type="text"
                    placeholder="password"
                    name="password"
                    id="password"
                    onChange={(evt) => {
                        handleChange(evt, setPassword);
                    }}
                />
                <button type="submit" className="confirmation-btn">
                    Login
                </button>
            </form>
        </div>
    );
}
