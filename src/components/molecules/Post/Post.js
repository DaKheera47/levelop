import React from "react";

import Title from "../../atoms/Title";
import Image from "../../atoms/Image";
import Author from "../../atoms/Author";
import "./postStyle.sass";

export default function Post({ title, imgSrc, imgAlt, author }) {
    return (
        <div className="post-body">
            <div className="post-title-img">
                <Image className="post-img" src={imgSrc} alt={imgAlt} />
                <Title className="post-title" text={title} />
            </div>

            <Author className="post-author" name={author} />
        </div>
    );
}
