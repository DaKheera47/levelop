import React from "react";
import Post from "../molecules/Post/Post";
import { motion } from "framer-motion";

import "./homeStyle.sass";

export default function Home() {
    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="home-posts">
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
        </motion.div>
    );
}
