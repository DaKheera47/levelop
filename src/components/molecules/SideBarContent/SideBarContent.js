import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CallToAction from "../../atoms/CallToAction";
import { FaRegPlusSquare } from "react-icons/fa";
import { SideBarContext } from "../../contexts/SideBarContext";

export default function SideBarContent({ navLinksPaths, isAuthenticated }) {
    const { closeSideBar } = useContext(SideBarContext);

    return (
        <>
            <div className="side-bar-item-container">
                {navLinksPaths.map((e, i) => (
                    <>
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
                    </>
                ))}

                {isAuthenticated ? (
                    <div className="side-bar-CTA-container">
                        <hr color="#fa6400" size="1" />
                        <a href="/" className="side-bar-logout">
                            Logout
                        </a>
                    </div>
                ) : (
                    <div className="side-bar-CTA-container">
                        <CallToAction className="side-bar-CTA" text="Sign Up" />

                        <CallToAction
                            className="side-bar-secondary-CTA"
                            text="Log In"
                        />
                    </div>
                )}
            </div>
        </>
    );
}
