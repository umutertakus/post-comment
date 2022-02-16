import axios from "axios";
import { api } from "../api";

export const callPostList = () => dispatch => {
    api().get("/posts")
        .then(response => {
            dispatch({ type: "CALL_POST_LIST", payload: response.data })
        })
        .catch(() => {
            dispatch({ type: "CALL_POST_LIST_ERROR", payload: "Yazılar yüklenirken hata oluştu." })
        })
};

export const callPost = (id) => dispatch => {
    axios
        .all([
            api().get(`/posts/${id}`),
            api().get(`/posts/${id}/comments`),
        ])
        .then((responses) => {
            const payload = {
                ...responses[0].data,
                comments: responses[1].data,
            }
            dispatch({ type: "CALL_POST", payload })
        }).catch((error) => {
            dispatch({ type: "CALL_POST_ERROR", payload: "Yazı yüklenirken hata oluştu." });
        });
};

export const editPost = (id, post, push) => dispatch => {
    api()
        .put(`/posts/${id}`, post)
        .then((response) => {
            dispatch({ type: "EDIT_POST", payload: response.data })
            push(`/posts/${id}`);
        })
        .catch(error => {
            dispatch({ type: "EDIT_POST_ERROR", payload: "Başlık ve yazı içeriği zorunludur." })
        });
}

export const addComment = (id, comment) => dispatch => {
    api().post(`/posts/${id}/comments`, comment)
        .then((response) => {
            dispatch({ type: "ADD_COMMENT", payload: response.data })
        }).catch(error => {
            dispatch({ type: "ADD_COMMENT_ERROR", payload: "Yorum eklerken hata oluştu." })
        });
};

export const deletePost = (id, close, push) => dispatch => {
    api()
        .delete(`/posts/${id}`)
        .then(() => {
            dispatch({ type: "DELETE_POST", payload: id })
            close();
            push(`/`);
        })
        .catch(() => {
            dispatch({ type: "DELETE_POST_ERROR", payload: "Yazıyı silerken bir hata oluştu." });
        });
}