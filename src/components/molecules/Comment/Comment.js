import React from "react";
import Title from "../../atoms/Title";
import "./Comment.sass";

export default function Comment({ author, content }) {
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
            </div>
        </div>
    );
}
