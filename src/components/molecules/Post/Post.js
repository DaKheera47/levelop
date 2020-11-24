import React from "react";

import Image from "../../atoms/Image";
import Author from "../../atoms/Author";

import { Link } from "react-router-dom";

import "./postStyle.sass";

export default function Post({ title, imgSrc, imgAlt, author, postUrl }) {
    return (
        <div className="post-body">
            <div className="post-title-img">
                <Image className="post-img" src={imgSrc} alt={imgAlt} />
                <Link className="post-title" to={postUrl}>
                    {title}
                </Link>
            </div>

            <Author className="post-author" name={author} />
        </div>
    );
}
