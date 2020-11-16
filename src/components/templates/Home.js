import React from "react";
import NavBar from "../organisms/Nav/Nav";
import Post from "../molecules/Post/Post";
import "./homeStyle.sass";

export default function Home() {
    return (
        <div className="home-page">
            <NavBar />

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
                title="This is a demo of only fourteen words that are allowed this is another!"
                imgSrc="https://www.online-tech-tips.com/wp-content/uploads/2018/10/touch-typing-tips.jpg"
                imgAlt="typing"
            />
        </div>
    );
}
