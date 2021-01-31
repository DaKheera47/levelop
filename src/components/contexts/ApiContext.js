import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
    const cookies = new Cookies();
    const preUrl = "https://levelopbackend.herokuapp.com";
    const history = useHistory();
    const authAxios = axios.create({
        baseURL: preUrl,
        headers: {
            Authorization: `${cookies.get("jwt")}`,
        },
    });
    const preUrlAxios = axios.create({
        baseURL: preUrl,
    });

    const [currUser, setCurrUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    const [isAuthenticated, setIsAuthenticated] = useState(
        !!cookies.get("jwt")
    );

    axios.defaults.withCredentials = true;

    // refresh authentication state based on jwt cookie
    const refreshAuthentication = () => {
        setIsAuthenticated(!!cookies.get("jwt") && currUser);
    };

    const SignUp = (email, password, username, fullName) => {
        authAxios
            .post(`register`, {
                email: email,
                password: password,
                username: username,
                fullname: fullName,
            })
            .then((res) => {
                //handle success
                cookies.set("jwt", res?.data?.token);
                refreshAuthentication();

                localStorage.setItem(
                    "user",
                    JSON.stringify(res?.data?.newUser)
                );

                if (currUser) {
                    let userFromLocal = JSON.parse(
                        localStorage.getItem("user")
                    );
                    if (userFromLocal) {
                        setCurrUser(userFromLocal);
                    } else {
                        setCurrUser(res.data.user);
                    }
                }

                refreshAuthentication();
                history.push("/");
            })
            .catch((res) => {
                //handle error
                console.log(res);
            });
    };

    const Login = (email, password) => {
        console.log(email, password);
        authAxios
            .post(`login`, {
                email: email,
                password: password,
            })
            .then((res) => {
                //handle success
                // setting newly sent jwt as cookie
                cookies.set("jwt", res?.data?.token, { path: "/" });
                // set the current user in localstorage as string
                localStorage.setItem("user", JSON.stringify(res?.data?.user));

                if (currUser) {
                    // if no user in localstorage then set new user as currUser
                    setCurrUser(res?.data?.user);
                }
                refreshAuthentication();
                history.push("/");
            })
            .catch((e) => {
                //handle error
                console.log(e);
            });
    };

    const Logout = () => {
        cookies.set("jwt", "", { path: "/" });
        refreshAuthentication();
        setCurrUser({});
        history.push("/login");
    };

    return (
        <ApiContext.Provider
            value={{
                preUrl,
                Login,
                Logout,
                cookies,
                SignUp,
                currUser,
                authAxios,
                preUrlAxios,
                checkIsAuthenticated: refreshAuthentication,
                isAuthenticated,
            }}
        >
            {props.children}
        </ApiContext.Provider>
    );
};

export { ApiContextProvider };
