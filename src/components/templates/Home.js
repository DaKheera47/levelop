import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import Post from "../molecules/Post/Post";
import HomeProfile from "../molecules/HomeProfile/HomeProfile";
import { useMediaQuery } from "react-responsive";
import { PostsContext } from "../contexts/AllPostsContext";

import "./homeStyle.sass";
export default function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1224px)",
    });

    const { getAllPosts, allPosts, isLoading } = useContext(PostsContext);

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);

    return (
        <>
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <div className="home-page">
                    {isDesktopOrLaptop && (
                        <div className="home-left-panel">
                            <div className="profile">
                                <HomeProfile
                                    imageSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                                    profileHandle="@VIBEGANG"
                                    profileName="Horse Ammar"
                                    profileNibbles={50}
                                />
                            </div>

                            <div className="home-left-panel-links-container">
                                <NavLink
                                    to="/"
                                    className="home-panel-link"
                                    activeClassName="home-panel-link-active"
                                >
                                    Feed
                                </NavLink>
                                <NavLink
                                    to="/saved"
                                    className="home-panel-link"
                                    activeClassName="home-panel-link-active"
                                >
                                    Saved
                                </NavLink>
                                <NavLink
                                    to="/settings"
                                    className="home-panel-link"
                                    activeClassName="home-panel-link-active"
                                >
                                    Settings
                                </NavLink>
                            </div>
                        </div>
                    )}

                    <div className="posts">
                        {allPosts["data"]?.map((e) => (
                            <Post
                                author={e._id}
                                title={e.title}
                                imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                                imgAlt="image"
                                postUrl={`posts/${e._id}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
