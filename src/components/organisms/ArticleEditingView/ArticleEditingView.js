import React, { useState } from "react";
import handleChange from "../../../helpers/handleInputChange";
import ArticleHeader from "../../molecules/ArticleHeader/ArticleHeader";
import TextareaAutosize from "react-textarea-autosize";
import css from "./ArticleEditingView.module.sass";
import { handleEditPost } from "../../../apiCalls/articleCall";

export default function ArticleContent({ props }) {
    const {
        article,
        setArticle,
        setIsBeingEdited,
        postId,
        setIsArticleLoading,
    } = props;
    const [title, setTitle] = useState(article?.title);
    const [content, setContent] = useState(article?.content);

    const articleHeaderProps = {
        isEditing: true,
        author: article?.author?.username,
        time: "8",
        title,
        setTitle,
        profileUrl:
            "https://miro.medium.com/fit/c/56/56/1*AwBz4NW9_M45J-sBlmH-lA.png",
    };

    const handleEdit = async () => {
        setIsArticleLoading(true);

        let data = await handleEditPost(postId, title, content).catch((e) => {
            console.log(e);
            return;
        });

        if (!data.error) {
            setIsBeingEdited(false);
            setArticle(data.data);
            setIsArticleLoading(false);
        }

        return;
    };

    return (
        <>
            <ArticleHeader props={articleHeaderProps} />

            <button
                className="confirmation-btn"
                type="submit"
                onClick={() => {
                    handleEdit();
                }}
            >
                Confirm
            </button>

            <button
                className="negative-btn"
                onClick={() => {
                    setIsBeingEdited(false);
                }}
            >
                Cancel
            </button>

            <TextareaAutosize
                value={content}
                className={css.content}
                onChange={(evt) => {
                    handleChange(evt, setContent);
                }}
            />
        </>
    );
}
