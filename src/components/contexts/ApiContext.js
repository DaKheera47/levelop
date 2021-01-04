import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
    const cookies = new Cookies();
    const preUrl = "http://localhost:6969";
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

    const [currUser, setCurrUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!cookies.get("jwt")
    );

    axios.defaults.withCredentials = true;

    const checkIsAuthenticated = () => {
        setIsAuthenticated(!!cookies.get("jwt"));
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
                setCurrUser(res?.data?.newUser);
                console.log(currUser);
                checkIsAuthenticated();
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
                cookies.set("jwt", res?.data?.token, { path: "/" });
                setCurrUser({
                    email: res?.data?.user?.email,
                    fullName: res?.data?.user?.fullname,
                    username: res?.data?.user?.username,
                });
                console.log(res);
                checkIsAuthenticated();
                history.push("/");
            })
            .catch((res) => {
                //handle error
                console.log(res);
            });
    };

    const Logout = () => {
        cookies.set("jwt", "", { path: "/" });
        checkIsAuthenticated();
        history.push("/login")
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
                checkIsAuthenticated,
                isAuthenticated,
            }}
        >
            {props.children}
        </ApiContext.Provider>
    );
};

export { ApiContextProvider };
