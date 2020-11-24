import React from "react";

import "./ArticleView.sass";
import ArticleHeader from "../molecules/ArticleHeader/ArticleHeader";

export default function ArticleView() {
    return (
        <div className="article-page">
            <ArticleHeader
                author="Shaheer"
                time="5"
                title="How to learn nodejs and mongodb from scratch!"
                profileUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
            />
        </div>
    );
}
