import { api } from "../api";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const PostForm = (props) => {

    const [post, setPost] = useState({ title: "", content: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const onInputChange = event => setPost({ ...post, [event.target.name]: event.target.value });

    const onFormSubmit = (event) => {
        event.preventDefault();
        setErrorMessage("");
        api().post("/posts", post)
            .then((response) => {
                props.history.push("/");
            })
            .catch(error => {
                setErrorMessage("Başlık ve yazı içeriği zorunludur.")
            })
    }

    return (
        <React.Fragment>
            {errorMessage && (<div className="ui error message">
                <div className="header">Hata</div>
                <p>{errorMessage}</p>
            </div>)}

            <div className="ui form">
                <div className="field">
                    <label>Yazı Başlığı</label>
                    <input value={post.title} type="text" name="title" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Yazı İçeriği</label>
                    <textarea value={post.content} name="content" onChange={onInputChange} rows="3"></textarea>
                </div>
                <button
                    onClick={onFormSubmit}
                    className="ui primary button">
                    Gönder
                </button>
                <button className="ui button">
                    İptal Et
                </button>
            </div>
        </React.Fragment>)
};

export default withRouter(PostForm);