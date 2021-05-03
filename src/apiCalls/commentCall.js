import createUpdatedArticle from "../helpers/createUpdatedArticle";
import { authAxios } from "../contexts/ApiContext";

// handle formation of new comment
export const handleNewComment = async (postId, newCommentText) => {
    let res = await authAxios
        .post(`posts/${postId}/comments`, { text: newCommentText })
        .catch((e) => {
            let status = {
                data: e,
                error: true,
            };
            console.log(status);
            return status;
        });

    let status = {
        data: createUpdatedArticle(res?.data),
        error: false,
    };

    console.log(status);
    return status;
};

// delete a comment in a post from db
export const handleDeleteComment = async (postId, commentId) => {
    let res = await authAxios
        .delete(`posts/${postId}/comments/${commentId}`)
        .catch((e) => {
            let status = {
                data: e,
                error: true,
            };
            console.log(status);
            return status;
        });

    let status = {
        data: createUpdatedArticle(res?.data?.refreshPost),
        error: false,
    };
    console.log(status);
    return status;
};

// edit a comment in a post in db
export const handleEditComment = async (postId, commentId, newCommentText) => {
    let res = await authAxios
        .put(`posts/${postId}/comments/${commentId}`, {
            text: newCommentText,
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
        data: createUpdatedArticle(res?.data),
        error: false,
    };

    console.log(status);
    return status;
};
