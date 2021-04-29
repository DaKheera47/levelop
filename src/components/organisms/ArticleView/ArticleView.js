import React from "react";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { VscBookmark } from "react-icons/vsc";
import "./ArticleView.sass";
import ArticleContent from "../../molecules/ArticleContent/ArticleContent";

export default function ArticleView() {
    const socialBtns = (
        <div className="article-view-social-btns">
            <AiOutlineLike
                style={{ margin: "0 5px" }}
                color="#fa6400"
                size={30}
            />
            <AiOutlineShareAlt
                style={{ margin: "0 5px" }}
                color="#fa6400"
                size={30}
            />
            <VscBookmark
                style={{ margin: "0 5px" }}
                color="#fa6400"
                size={30}
            />
        </div>
    );

    return (
        <div className="article-page">
            <ArticleContent />

            {/* {socialBtns} */}

            {/* {article?.comments && !isCommentsLoading(
                <>
                    <ArticleComments
                        comments={article?.comments}
                        postId={postId}
                        newCommentContent={newCommentContent}
                        setNewCommentContent={setNewCommentContent}
                        handleNewComment={handleNewComment}
                    />
                </>
            )} */}
        </div>
    );
}