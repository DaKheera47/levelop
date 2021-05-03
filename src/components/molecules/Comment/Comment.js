import React, { useState } from "react";
import Title from "../../atoms/Title";
import "./Comment.sass";
import handleChange from "../../../helpers/handleInputChange";
import {
    handleDeleteComment,
    handleEditComment,
} from "../../../apiCalls/commentCall";
import { useParams } from "react-router-dom";

export default function Comment({ props }) {
    const {
        author,
        content,
        id: commentId,
        isCommentOfCurrUser,
        setIsArticleLoading,
        setArticle,
    } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [updatedComment, setUpdatedComment] = useState("");
    let { id: postId } = useParams();

    const deleteComment = async () => {
        setIsArticleLoading(true);
        let article = await handleDeleteComment(postId, commentId).catch(
            (e) => {
                setIsArticleLoading(false);
                return;
            }
        );

        console.log(article);

        if (!article.error) {
            setArticle(article.data);
        }

        setIsArticleLoading(false);
    };

    const editComment = async () => {
        setIsArticleLoading(true);

        let res = await handleEditComment(
            postId,
            commentId,
            updatedComment
        ).catch((e) => {
            setIsArticleLoading(false);
            return;
        });

        console.log(res);

        if (!res.error) {
            setArticle(res.data);
            setIsArticleLoading(false);
        }
    };

    return (
        <>
            <hr color="#fa6400" size="1" />
            <div className="comment-body">
                <div className="comment-profileUrl-container">
                    <img
                        className="comment-profileUrl"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
                        alt=""
                    />
                </div>

                <div className="comment-header">
                    <div className="comment-info">
                        <Title className="comment-author" text={author} />
                        <span className="comment-date">24/11/20</span>
                    </div>
                    <p className="comment-content">{content}</p>
                </div>

                {isCommentOfCurrUser && (
                    <>
                        <button
                            onClick={() => {
                                deleteComment();
                            }}
                        >
                            D
                        </button>
                        <button
                            onClick={() => {
                                setIsEditing((prev) => !prev);
                            }}
                        >
                            E
                        </button>
                    </>
                )}

                {isEditing && (
                    <>
                        <input
                            type="text"
                            value={updatedComment}
                            onChange={(evt) =>
                                handleChange(evt, setUpdatedComment)
                            }
                        />
                        <button
                            onClick={() => {
                                editComment();
                            }}
                        >
                            Submit
                        </button>
                    </>
                )}
            </div>
        </>
    );
}
