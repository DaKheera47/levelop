// forming an article with authentication property of each comment
export default function createUpdatedArticle(updatedArticle) {
    let currUser = JSON.parse(localStorage.getItem("user"));

    if (!currUser) {
        return;
    }

    updatedArticle?.comments.forEach((e) => {
        // compare author of comment with currently authenticated user
        // and check if they belong to each other
        e.isCommentOfCurrUser = e?.author?.id === currUser?._id;
    });

    // check if currently opened post belongs to the currently authenticated user
    updatedArticle.isArticleOfCurrUser =
        updatedArticle?.author?.id === currUser?._id;

    return updatedArticle;
}
