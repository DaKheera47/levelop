import React from "react";
import Title from "../../atoms/Title";
import "./Comment.sass";

export default function Comment({ author, content }) {
    return (
        <div>
            <div className="comment-body">
                <div>
                    <img
                        className="comment-profileUrl"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
                        alt=""
                    />
                </div>
                <div>
                    <Title className="comment-author" text={author} />
                    <p className="comment-content">{content}</p>
                </div>
            </div>
            <hr color="#fa6400" size="1" />
        </div>
    );
}
