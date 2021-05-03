import React from "react";
import "./ArticleView.sass";
import ArticleContent from "../../molecules/ArticleContent/ArticleContent";
// import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
// import { VscBookmark } from "react-icons/vsc";

export default function ArticleView() {
    // const socialBtns = (
    //     <div className="article-view-social-btns">
    //         <AiOutlineLike
    //             style={{ margin: "0 5px" }}
    //             color="#fa6400"
    //             size={30}
    //         />
    //         <AiOutlineShareAlt
    //             style={{ margin: "0 5px" }}
    //             color="#fa6400"
    //             size={30}
    //         />
    //         <VscBookmark
    //             style={{ margin: "0 5px" }}
    //             color="#fa6400"
    //             size={30}
    //         />
    //     </div>
    // );

    return (
        <div className="article-page">
            <ArticleContent />
        </div>
    );
}
