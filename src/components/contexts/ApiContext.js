import React, { createContext } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
    const cookies = new Cookies();
    const preUrl = "http://ammar-2fe2a823.localhost.run";
    const history = useHistory();

    axios.defaults.withCredentials = true;

    const Login = (email, password) => {
        console.log(email, password);
        axios
            .post(
                `${preUrl}/login`,
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        Authorization: `${cookies.get("jwt")}`,
                    },
                }
            )
            .then(function (res) {
                //handle success
                cookies.set("jwt", res?.data?.token);
                console.log(res);
                history.push("/");
            })
            .catch(function (res) {
                //handle error
                console.log(res);
            });
    };

    const SignUp = (email, password, username) => {
        axios
            .post(`${preUrl}/register`, {
                email: email,
                password: password,
                username: username,
            })
            .then(function (res) {
                //handle success
                cookies.set("jwt", res?.data?.token);
                console.log(res);
                history.push("/");
            })
            .catch(function (res) {
                //handle error
                console.log(res);
            });
    };

    const Logout = () => {
        cookies.remove("jwt");
    };

    return (
        <ApiContext.Provider value={{ preUrl, Login, Logout, cookies, SignUp }}>
            {props.children}
        </ApiContext.Provider>
    );
};

export { ApiContextProvider };
