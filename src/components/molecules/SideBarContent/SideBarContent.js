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
            <div className="side-bar-item-container">
                {navLinksPaths.map((e, i) => (
                    <div key={e.to}>
                        {e.isHighlighted ? (
                            <NavLink
                                className="side-bar-item highlighted"
                                exact
                                key={i}
                                to={e.to}
                                activeClassName="active"
                                onClick={() => {
                                    closeSideBar();
                                }}
                            >
                                {e.isHighlighted && (
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
                                )}
                                {e.text}
                            </NavLink>
                        ) : (
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
                    </div>
                ))}

                {isAuthenticated ? (
                    <div className="side-bar-CTA-container">
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
                    </div>
                ) : (
                    <div className="side-bar-CTA-container">
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
                    </div>
                )}
            </div>
        </>
    );
}
