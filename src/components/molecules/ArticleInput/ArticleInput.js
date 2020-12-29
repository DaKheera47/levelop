import React from "react";

export default function ArticleInput({
    articleTitle,
    handleSubmit,
    setArticleTitle,
    setArticleContent,
    articleContent,
    handleCancel,
    handleChange,
    buttonText,
}) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="new-article-text-area">
                    <input
                        type="text"
                        name="name"
                        className="new-article-title-input"
                        placeholder="Title (say something interesting)"
                        value={articleTitle}
                        required
                        onChange={(evt) => {
                            handleChange(evt, setArticleTitle);
                        }}
                    />

                    <hr className="new-article-custom-separator" />

                    <textarea
                        type="text"
                        name="content"
                        className="new-article-content-input"
                        placeholder="Start Here..."
                        value={articleContent}
                        required
                        onChange={(evt) => {
                            handleChange(evt, setArticleContent);
                        }}
                    />
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="confirmation-btn"
                    >
                        {buttonText ? buttonText : "Post"}
                    </button>
                    <button
                        onClick={handleCancel}
                        type="button"
                        className="negative-btn"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
}
