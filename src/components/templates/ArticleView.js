import React, { useContext, useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { VscBookmark } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import Title from "../atoms/Title";
import { ArticleContext } from "../contexts/ArticleContext";
import ArticleComments from "../molecules/ArticleComments/ArticleComments";
import ArticleHeader from "../molecules/ArticleHeader/ArticleHeader";
import ArticleInput from "../molecules/ArticleInput/ArticleInput";
import "./ArticleView.sass";

export default function ArticleView() {
    // contexts
    const {
        getArticle,
        article,
        isLoading,
        handleDeletePost,
        handleEditPost,
        handleNewComment,
    } = useContext(ArticleContext);

    // react router
    let { id: postId } = useParams();

    useEffect(() => {
        getArticle(postId);
    }, [postId, getArticle]);

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

    // state
    const [articleContent, setArticleContent] = useState("");
    const [articleTitle, setArticleTitle] = useState("");
    const [newCommentContent, setNewCommentContent] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setArticleTitle(article?.title);
        setArticleContent(article?.content);
    }, [article]);

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
                        author={article?.author?.username}
                        time="8"
                        title={articleTitle}
                        profileUrl="https://miro.medium.com/fit/c/56/56/1*AwBz4NW9_M45J-sBlmH-lA.png"
                    />

                    <div className="article-content">{articleContent}</div>

                    {socialBtns}

                    <button
                        onClick={() => {
                            handleDeletePost(postId);
                        }}
                    >
                        Delete Post
                    </button>
                    <button
                        onClick={() => {
                            // toggle isEditing post
                            setIsEditing((prev) => !prev);
                        }}
                    >
                        Edit Post
                    </button>

                    {isEditing && !isLoading && (
                        <ArticleInput
                            articleContent={articleContent}
                            articleTitle={articleTitle}
                            setArticleContent={setArticleContent}
                            setArticleTitle={setArticleTitle}
                            handleChange={handleChange}
                            buttonText="Update"
                            handleSubmit={() => {
                                handleEditPost(
                                    postId,
                                    articleTitle,
                                    articleContent
                                );
                            }}
                        />
                    )}

                    {article?.comments && (
                        <>
                            <Title className="comments-title" text="Comments" />
                            <div className="comment-submission-form">
                                <TextareaAutosize
                                    type="text"
                                    value={newCommentContent}
                                    className="new-comment-input"
                                    placeholder="Say something about this..."
                                    onChange={(evt) =>
                                        handleChange(evt, setNewCommentContent)
                                    }
                                />
                                <button
                                    className="comment-submission confirmation-btn"
                                    onClick={() => {
                                        handleNewComment(
                                            postId,
                                            newCommentContent,
                                            setNewCommentContent
                                        );
                                    }}
                                >
                                    Submit
                                </button>
                            </div>

                            <ArticleComments
                                comments={article?.comments}
                                postId={postId}
                                newCommentContent={newCommentContent}
                                setNewCommentContent={setNewCommentContent}
                                handleNewComment={handleNewComment}
                            />
                        </>
                    )}
                </>
            )}
        </div>
    );
}
