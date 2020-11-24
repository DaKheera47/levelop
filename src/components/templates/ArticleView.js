import React from "react";
import { motion } from "framer-motion";

import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { VscBookmark } from "react-icons/vsc";

import "./ArticleView.sass";
import ArticleHeader from "../molecules/ArticleHeader/ArticleHeader";
import ArticleComments from "../molecules/ArticleComments/ArticleComments";

export default function ArticleView() {
    return (
        <motion.div
            className="article-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <ArticleHeader
                author="Shaheer"
                time="5"
                title="How to learn nodejs and mongodb from scratch!"
                profileUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
            />

            <div className="article-content">
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>

            <div className="article-content">
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>

            <div className="article-content">
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>

            <div>
                <AiOutlineLike color="#fa6400" size={30} />
                <AiOutlineShareAlt color="#fa6400" size={30} />
                <VscBookmark color="#fa6400" size={30} />
            </div>

            <ArticleComments />

        </motion.div>
    );
}
