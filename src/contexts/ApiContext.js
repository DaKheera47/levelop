import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

export const ApiContext = createContext();
let authAxios;

const ApiContextProvider = (props) => {
    const cookies = new Cookies();
    const preUrl = "https://levelopbackend.herokuapp.com";
    const history = useHistory();
    authAxios = axios.create({
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

    const SignUp = (email, password, username, fullname) => {
        authAxios
            .post(`register`, {
                email,
                password,
                username,
                fullname,
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

export { ApiContextProvider, authAxios };

// const posts = [
//     {
//         foundPost: {
//             author: {
//                 id: "5fed39446316722ed8dad235",
//                 username: "saltshakershamila",
//             },
//             comments: [
//                 {
//                     author: {
//                         id: "6016d19bab632e0017c3730a",
//                         username: "@DaKheera47",
//                     },
//                     _id: "6016d1aeab632e0017c3730b",
//                     text: "uh",
//                     __v: 0,
//                 },
//                 {
//                     author: {
//                         id: "5febe42936409726c1ba9b09",
//                         username: "zainabus",
//                     },
//                     _id: "6020ad67de22a10017589981",
//                     text: "This is a comment from my phone!",
//                     __v: 0,
//                 },
//                 {
//                     author: {
//                         id: "6020b014de22a10017589982",
//                         username: "ammaros",
//                     },
//                     _id: "6020b027de22a10017589983",
//                     text: "Amazing Read ngl!",
//                     __v: 0,
//                 },
//                 {
//                     author: {
//                         id: "5fed39446316722ed8dad235",
//                         username: "saltshakershamila",
//                     },
//                     _id: "60890ac343ca840017668cf3",
//                     text: "this is a comment by salt shaker shamila",
//                     __v: 0,
//                 },
//             ],
//             _id: "5ff138ef8b4b321ccc854b10",
//             title:
//                 "This is another post that is from another user which is salt shaker shamila",
//             content:
//                 "This is the main content of this post that will be very useful to us in the future that will mean that we might have some excellent content on this site in the future",
//             __v: 13,
//         },
//     },

//     {
//         foundPost: {
//             author: { id: "5febe42936409726c1ba9b09", username: "zainabus" },
//             comments: [
//                 {
//                     author: {
//                         id: "5febe42936409726c1ba9b09",
//                         username: "zainabus",
//                     },
//                     _id: "5ff5df12d2b7ad17c84c20b5",
//                     text: "Binig Bong?",
//                     __v: 0,
//                 },
//                 {
//                     author: {
//                         id: "5febe42936409726c1ba9b09",
//                         username: "zainabus",
//                     },
//                     _id: "5ff5e208d2b7ad17c84c20b6",
//                     text: "Zain brain no",
//                     __v: 0,
//                 },
//             ],
//             _id: "5ff5d055d2b7ad17c84c20af",
//             title: "This is a new test post",
//             content: "bruh abcde",
//             __v: 6,
//         },
//     },
// ];
