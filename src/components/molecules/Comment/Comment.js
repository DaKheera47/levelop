import React, { useState, useContext } from "react";
import Title from "../../atoms/Title";
import { ArticleContext } from "../../contexts/ArticleContext";
import "./Comment.sass";

export default function Comment({ author, content, id }) {
    const [isEditing, setIsEditing] = useState(false);
    const { article, handleDeleteComment, handleEditComment } = useContext(
        ArticleContext
    );
    const [newComment, setNewComment] = useState("");

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

    return (
        <div>
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
                    <Title className="comment-author" text={author} />
                    <span className="comment-date">24/11/20</span>
                </div>
                <p className="comment-content">{content}</p>

                <button
                    onClick={() => {
                        handleDeleteComment(article?._id, id);
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

                {isEditing && (
                    <>
                        <input
                            type="text"
                            value={newComment}
                            onChange={(evt) => handleChange(evt, setNewComment)}
                        />
                        <button
                            onClick={() => {
                                handleEditComment(id, article?._id, newComment);
                            }}
                        >
                            Submit
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
