import React, { createContext, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
    const cookies = new Cookies();
    const preUrl = "http://ammar-c55ab810.localhost.run";
    const history = useHistory();

    const [currUser, setCurrUser] = useState({});

    axios.defaults.withCredentials = true;

    const SignUp = (email, password, username, fullName) => {
        axios
            .post(`${preUrl}/register`, {
                email: email,
                password: password,
                username: username,
                fullname: fullName,
            })
            .then(function (res) {
                //handle success
                cookies.set("jwt", res?.data?.token);
                setCurrUser(res?.data?.newUser);
                console.log(currUser);
                history.push("/");
            })
            .catch(function (res) {
                //handle error
                console.log(res);
            });
    };

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
                setCurrUser({
                    email: res?.data?.email,
                    fullName: res?.data?.fullname,
                    username: res?.data?.username,
                });
                console.log(res);
                console.log(currUser);
                history.push("/");
            })
            .catch(function (res) {
                //handle error
                console.log(res);
            });
    };

    const Logout = () => {
        cookies.set("jwt", "");
    };

    return (
        <ApiContext.Provider
            value={{ preUrl, Login, Logout, cookies, SignUp, currUser }}
        >
            {props.children}
        </ApiContext.Provider>
    );
};

export { ApiContextProvider };
