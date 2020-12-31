import React, { useContext } from "react";
import Comment from "../Comment/Comment";
import CallToAction from "../../atoms/CallToAction";
import axios from "axios";
import { ApiContext } from "../../contexts/ApiContext";

import "./ArticleComments.sass";

export default function ArticleComments({ comments, postId, setComments }) {
    const { preUrl, cookies } = useContext(ApiContext);

    const handleDelete = (commentId) => {
        console.log(commentId);
        console.log(`${preUrl}/posts/${postId}/comments/${commentId}`);
        axios
            .delete(`${preUrl}/posts/${postId}/comments/${commentId}`, {
                headers: {
                    Authorization: `${cookies.get("jwt")}`,
                },
            })
            .then((res) => {
                console.log(res);
                setComments(res?.data?.refreshPost?.comments);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <>
            {comments.map((e, i) => (
                <div key={e._id}>
                    <Comment
                        key={i}
                        author={e.author.username}
                        content={e.text}
                    />
                    <button
                        onClick={() => {
                            handleDelete(e._id);
                        }}
                    >
                        D
                    </button>
                </div>
            ))}

            <div className="comments-load-container">
                <CallToAction className="comments-load" text="Load More" />
            </div>
        </>
    );
}
