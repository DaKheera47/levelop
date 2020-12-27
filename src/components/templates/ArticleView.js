import React, { useEffect, useContext } from "react";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { VscBookmark } from "react-icons/vsc";
import "./ArticleView.sass";
import ArticleHeader from "../molecules/ArticleHeader/ArticleHeader";
import ArticleComments from "../molecules/ArticleComments/ArticleComments";
import { useParams } from "react-router-dom";
import { ArticleContext } from "../contexts/ArticleContext";

export default function ArticleView() {
    const comments = [
        {
            author: "Horse Ammar",
            content:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            author: "Horse Ammar",
            content:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
    ];

    let { id } = useParams();
    const { getArticle, article, isLoading } = useContext(ArticleContext);
    // const { getArticle, isLoading } = useContext(ArticleContext);
    // let article = {
    //     data: {
    //         _id: "5fe1eb6bee7e084cac93edf5",
    //         title:
    //             "How to learn node.js with MongoDB in just 15 Days with Shaheer Sarfaraz",
    //         content:
    //             "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    //     },
    // };

    const socialBtns = (
        <div className="article-view-social-btns">
            <AiOutlineLike
                style={{ margin: "0 5px" }}
                color="#fa6400"
                size={30}
            />
            <AiOutlineShareAlt
                style={{ margin: "0 5px" }}
                color="#fa6400"
                size={30}
            />
            <VscBookmark
                style={{ margin: "0 5px" }}
                color="#fa6400"
                size={30}
            />
        </div>
    );

    useEffect(() => {
        getArticle(id);
    }, [getArticle, id]);

    return (
        <div className="article-page">
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <>
                    <ArticleHeader
                        author={article?.data?.author?.username}
                        time="8"
                        title={article?.data?.title}
                        profileUrl="https://miro.medium.com/fit/c/56/56/1*AwBz4NW9_M45J-sBlmH-lA.png"
                    />

                    <div className="article-content">
                        {article?.data?.content}
                    </div>

                    {socialBtns}

                    <ArticleComments comments={comments} />
                </>
            )}
        </div>
    );
}
