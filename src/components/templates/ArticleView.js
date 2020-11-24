import React from "react";

import "./ArticleView.sass";
import Title from "../atoms/Title";

export default function ArticleView() {
    return (
        <div className="article-page">
            <Title className="article-title" text="How to learn node.js with mongoDB in just 15 days!" />
            <hr size="1" />
        </div>
    );
}
