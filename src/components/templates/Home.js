import React from "react";
import { NavLink } from "react-router-dom";
import Post from "../molecules/Post/Post";
import HomeProfile from "../molecules/HomeProfile/HomeProfile";
import { useMediaQuery } from "react-responsive";

import "./homeStyle.sass";
export default function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1224px)",
    });
    return (
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
                <Post
                    author="Zain Abbas"
                    title="How to learn node.js with MongoDB in just 15 days!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                    postUrl="/article"
                />

                <Post
                    author="Zain Abbas"
                    title="How to learn node.js with MongoDB in just 15 days!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                    postUrl="/article"
                />

                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                    postUrl="/article"
                />
                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                    postUrl="/article"
                />

                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                    postUrl="/article"
                />
                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                    postUrl="/article"
                />

                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                    postUrl="/article"
                />
                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                    postUrl="/article"
                />

                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                    postUrl="/article"
                />
            </div>
        </div>
    );
}
