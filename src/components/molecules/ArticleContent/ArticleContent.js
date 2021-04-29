import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getArticle, handleDeletePost } from "../../../apiCalls/articleCall";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import ArticleEditingView from "../../organisms/ArticleEditingView/ArticleEditingView";

export default function ArticleContent() {
    const [article, setArticle] = useState({});
    const [status, setStatus] = useState("Loading, Please Wait.");
    const [isArticleLoading, setIsArticleLoading] = useState(true);
    const [isBeingEdited, setIsBeingEdited] = useState(false);

    let { id: postId } = useParams();
    let history = useHistory();

    // get article on page load
    useEffect(() => {
        async function apiForArticle() {
            let article = await getArticle(postId).catch((e) => {
                setStatus(e);
                return;
            });

            if (!article.error) {
                setArticle(article.data);
            }

            setIsArticleLoading(false);
        }

        apiForArticle();
    }, [postId]);

    const deletePost = async (postId) => {
        setIsArticleLoading(true);

        let data = await handleDeletePost(postId).catch((e) => {
            setStatus(e);
            return;
        });

        if (!data.error) {
            history.push("/");
        }

        return;
    };

    const propsForEditView = {
        article,
        setIsBeingEdited,
        postId,
        setArticle,
        setIsArticleLoading,
    };

    const articleHeaderProps = {
        isEditing: false,
        title: article?.title,
        author: article?.author?.username,
        time: "8",
        profileUrl:
            "https://miro.medium.com/fit/c/56/56/1*AwBz4NW9_M45J-sBlmH-lA.png",
    };

    return (
        <>
            {isArticleLoading ? (
                <p>{status}</p>
            ) : (
                <>
                    {isBeingEdited ? (
                        <ArticleEditingView props={propsForEditView} />
                    ) : (
                        <>
                            <ArticleHeader props={articleHeaderProps} />

                            {article?.isArticleOfCurrUser && (
                                <>
                                    <button
                                        className="confirmation-btn"
                                        onClick={() => {
                                            deletePost(postId);
                                        }}
                                    >
                                        Delete Post
                                    </button>
                                    <button
                                        className="confirmation-btn"
                                        onClick={() => {
                                            // toggle isEditing post
                                            setIsBeingEdited((prev) => !prev);
                                        }}
                                    >
                                        Edit Post
                                    </button>
                                </>
                            )}

                            <div className="article-content">
                                {article.content}
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
}
