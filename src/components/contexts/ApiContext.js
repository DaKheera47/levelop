import React, { createContext } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
    const cookies = new Cookies();
    const preUrl = "http://ammar-5ca65705.localhost.run";
    const history = useHistory();

    axios.defaults.withCredentials = true;

    const Login = (email, password) => {
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

    const SignUp = (email, password) => {
        // TODO: sign up
        // axios
        //     .post(
        //         `${preUrl}/login`,
        //         {
        //             email: email,
        //             password: password,
        //         },
        //         {
        //             headers: {
        //                 Authorization: `${cookies.get("jwt")}`,
        //             },
        //         }
        //     )
        //     .then(function (res) {
        //         //handle success
        //         cookies.set("jwt", res?.data?.token);
        //         console.log(res);
        //         history.push("/");
        //     })
        //     .catch(function (res) {
        //         //handle error
        //         console.log(res);
        //     });
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
