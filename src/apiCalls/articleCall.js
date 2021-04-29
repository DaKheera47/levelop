import { authAxios } from "../contexts/ApiContext";

// forming an article with authentication property of each comment
const createUpdatedArticle = (updatedArticle) => {
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
};

// getting a specific article from server
export const getArticle = async (postId) => {
    let res = await authAxios.get(`posts/${postId}`).catch((e) => {
        let status = {
            data: e,
            error: true,
        };
        console.log(status);
        return status;
    });

    let status = {
        data: createUpdatedArticle(res?.data?.foundPost),
        error: false,
    };
    console.log(status);
    return status;
};

// sending deletion request to server
export const handleDeletePost = async (postId) => {
    let res = await authAxios.delete(`posts/${postId}`).catch((e) => {
        let status = {
            data: e,
            error: true,
        };
        console.log(status);
        return status;
    });

    let status = {
        data: res.data,
        error: false,
    };
    console.log(status);
    return status;
};

// send edited post to server to edit a post in db
export const handleEditPost = async (
    postId,
    newArticleTitle,
    newArticleContent
) => {
    let res = await authAxios
        .put(`posts/${postId}`, {
            post: {
                title: newArticleTitle,
                content: newArticleContent,
            },
        })
        .catch((e) => {
            let status = {
                data: e,
                error: true,
            };
            console.log(status);
            return status;
        });

    let status = {
        data: createUpdatedArticle(res.data.editedPost),
        error: false,
    };
    console.log(status);
    return status;
};
