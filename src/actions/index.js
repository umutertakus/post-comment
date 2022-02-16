import { api } from "../api";

export const callPostList = () => dispatch => {
    api().get("/posts")
        .then(response => {
            dispatch({ type: "CALL_POST_LIST", payload: response.data })
        })
        .catch(() => {
            dispatch({ type: "CALL_POST_LIST_ERROR", payload: "Yazılar yüklenirken hata oluştu." })
        })
}