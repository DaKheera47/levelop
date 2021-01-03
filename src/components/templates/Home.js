import React, { useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { PostsContext } from "../contexts/AllPostsContext";
import { ApiContext } from "../contexts/ApiContext";
import HomeProfile from "../molecules/HomeProfile/HomeProfile";
import Post from "../molecules/Post/Post";
import "./homeStyle.sass";

export default function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 768px)",
    });
    const cookies = new Cookies();

    const { currUser, Logout, isAuthenticated } = useContext(ApiContext);

    const { getAllPosts, allPosts, isLoading } = useContext(PostsContext);

    useEffect(() => {
        getAllPosts();
        // removing eslint error as we dont need to constantly get new posts
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const posts = allPosts["data"]?.map((e) => (
        <Post
            key={e?._id}
            author={e?.author?.username}
            title={e?.title}
            imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
            imgAlt="image"
            postUrl={`posts/${e?._id}`}
        />
    ));

    const navLinksPaths = [
        {
            to: "/",
            text: "Feed",
            requiresAuth: true,
        },
        {
            to: "/settings",
            text: "Settings",
            requiresAuth: true,
        },
        {
            to: "/saved",
            text: "Saved",
            requiresAuth: true,
        },
    ];

    return (
        <>
            <div className="home-page">
                {isDesktopOrLaptop && (
                    <div className="home-left-panel">
                        <div className="profile">
                            {isAuthenticated ? (
                                <HomeProfile
                                    imageSrc="https://cdn.discordapp.com/attachments/534742075783249931/795274374172901406/Facedp.jpg"
                                    profileHandle={`@${currUser?.username}`}
                                    profileName={currUser?.fullName}
                                    profileNibbles="50K"
                                />
                            ) : (
                                <HomeProfile
                                    imageSrc="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
                                    profileHandle="@guest"
                                    profileName="Hello Guest!"
                                    profileNibbles="0K"
                                />
                            )}
                        </div>

                        <div className="home-left-panel-links-container">
                            {navLinksPaths.map(
                                (e) =>
                                    e.requiresAuth &&
                                    isAuthenticated && (
                                        <NavLink
                                            to={e.to}
                                            className="home-panel-link"
                                            activeClassName="home-panel-link-active"
                                        >
                                            {e.text}
                                        </NavLink>
                                    )
                            )}
                            {isAuthenticated ? (
                                <div className="home-panel-logout-container">
                                    <hr color="#fa6400" size="1" style={{marginTop: 20}} />
                                    <p
                                        to="/"
                                        className="home-panel-logout"
                                        onClick={Logout}
                                    >
                                        Logout
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <Link
                                        to="/signup"
                                        className="home-panel-CTA"
                                    >
                                        Sign Up
                                    </Link>

                                    <Link
                                        to="/login"
                                        className="home-panel-secondary-CTA"
                                    >
                                        Log In
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {isLoading ? (
                    <p>Loading</p>
                ) : (
                    <div className="posts">{posts}</div>
                )}
            </div>
        </>
    );
}
