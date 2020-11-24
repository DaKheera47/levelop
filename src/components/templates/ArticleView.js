import React from "react";
import { motion } from "framer-motion";

import "./ArticleView.sass";
import ArticleHeader from "../molecules/ArticleHeader/ArticleHeader";

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
        </motion.div>
    );
}
