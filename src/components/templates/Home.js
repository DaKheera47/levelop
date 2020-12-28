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

    return (
        <>
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
                {isLoading ? (
                    <p>Loading</p>
                ) : (
                    <div className="posts">{posts}</div>
                )}
            </div>
        </>
    );
}
