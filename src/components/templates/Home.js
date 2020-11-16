import React, { useContext } from "react";
import Post from "../molecules/Post/Post";
import SideBar from "../organisms/SideBar/SideBar";
import NavBar from "../organisms/Nav/Nav";

import { SideBarContext } from "../contexts/SideBarContext";

import "./homeStyle.sass";

export default function Home() {
    const sideBarState = useContext(SideBarContext);

    return (
        <div className="home-page">
            <NavBar />
            <SideBar />

            <div className="home-posts">
                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                />

                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                />
                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                />

                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                />
                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                />

                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                />
                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                />

                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                />
                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                />

                <Post
                    author="Zain Abbas"
                    title="My experience learning how to type slower!"
                    imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                    imgAlt="typing"
                />
            </div>
        </div>
    );
}
