import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import { SideBarContext } from "../../contexts/SideBarContext";
import { ApiContext } from "../../contexts/ApiContext";

export default function SideBarContent({ navLinksPaths, isAuthenticated }) {
    const { closeSideBar } = useContext(SideBarContext);
    const { Logout } = useContext(ApiContext);

    return (
        <>
            {isAuthenticated && (
                <NavLink
                    to="/new-article"
                    onClick={() => {
                        closeSideBar();
                    }}
                    className="side-bar-item highlighted"
                >
                    <FaRegPlusSquare
                        key="posticon"
                        // somehow only inline styles work here because they are applied to the element instead of to a class
                        style={{
                            marginRight: "10px",
                            height: "25px",
                            verticalAlign: "text-top",
                            marginTop: "4px",
                        }}
                    />
                    New Post
                </NavLink>
            )}

            {navLinksPaths.map((e, i) => (
                <>
                    {e.requiresAuth && isAuthenticated && (
                        <NavLink
                            className="side-bar-item"
                            exact
                            key={i}
                            to={e.to}
                            activeClassName="active"
                            onClick={() => {
                                closeSideBar();
                            }}
                        >
                            {e.text}
                        </NavLink>
                    )}
                </>
            ))}

            <div className="side-bar-CTA-container">
                {isAuthenticated ? (
                    <>
                        <hr color="#fa6400" size="1" />
                        <p
                            to="/"
                            className="side-bar-logout"
                            onClick={() => {
                                closeSideBar();
                                Logout();
                            }}
                        >
                            Logout
                        </p>
                    </>
                ) : (
                    <>
                        <Link
                            to="/signup"
                            className="side-bar-CTA"
                            onClick={() => {
                                closeSideBar();
                            }}
                        >
                            Sign Up
                        </Link>

                        <Link
                            to="/login"
                            className="side-bar-secondary-CTA"
                            onClick={() => {
                                closeSideBar();
                            }}
                        >
                            Log In
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}
