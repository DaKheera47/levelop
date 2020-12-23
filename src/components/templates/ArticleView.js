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
                        author={article?.data?._id}
                        time="8"
                        title={article?.data?.name}
                        profileUrl="https://miro.medium.com/fit/c/56/56/1*AwBz4NW9_M45J-sBlmH-lA.png"
                    />

                    <div className="article-content">
                        {article?.data?.content}
                    </div>

                    <div>
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

                    <ArticleComments comments={comments} />
                </>
            )}
        </div>
    );
}
