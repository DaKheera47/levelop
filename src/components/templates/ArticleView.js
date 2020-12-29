import React, { useEffect, useContext, useState } from "react";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { VscBookmark } from "react-icons/vsc";
import "./ArticleView.sass";
import ArticleHeader from "../molecules/ArticleHeader/ArticleHeader";
import ArticleComments from "../molecules/ArticleComments/ArticleComments";
import ArticleInput from "../molecules/ArticleInput/ArticleInput";
import { useParams, useHistory } from "react-router-dom";
import { ArticleContext } from "../contexts/ArticleContext";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
import querystring from "querystring";

export default function ArticleView() {
    // contexts
    const { getArticle, article, isLoading } = useContext(ArticleContext);
    const { preUrl, cookies } = useContext(ApiContext);

    // react router
    let { id } = useParams();
    const history = useHistory();

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

    useEffect(() => {
        getArticle(id);
    }, [getArticle, id]);

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

    // state
    const [articleContent, setArticleContent] = useState("");
    const [articleTitle, setArticleTitle] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setArticleTitle(article?.data?.title);
        setArticleContent(article?.data?.content);
    }, [article?.data?.content, article?.data?.title]);

    const handleDelete = () => {
        console.log(`${preUrl}/posts/${id}`);
        axios
            .delete(`${preUrl}/posts/${id}`, {
                headers: {
                    Authorization: `${cookies.get("jwt")}`,
                },
            })
            .then((e) => {
                console.log(e);
                history.pushState("/");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSubmit = () => {
        axios
            .put(
                `${preUrl}/posts/${id}`,
                {
                    post: {
                        title: articleTitle,
                        content: articleContent,
                    },
                },
                {
                    headers: {
                        Authorization: `${cookies.get("jwt")}`,
                    },
                }
            )
            .then((res) => {
                console.log(res);
            })
            .then((err) => {
                console.log(err);
            });
    };

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

                    <button onClick={handleDelete}>Delete Post</button>
                    <button onClick={handleEdit}>Edit Post</button>

                    {isEditing && !isLoading && (
                        <ArticleInput
                            articleContent={articleContent}
                            articleTitle={articleTitle}
                            setArticleContent={setArticleContent}
                            setArticleTitle={setArticleTitle}
                            handleChange={handleChange}
                            buttonText="Update"
                            // handleCancel={handleCancel}
                            handleSubmit={handleSubmit}
                        />
                    )}

                    <ArticleComments comments={comments} />
                </>
            )}
        </div>
    );
}
