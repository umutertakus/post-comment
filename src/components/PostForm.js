import { api } from "../api";
import React, { useEffect, useState } from "react";
import { Link, withRouter, useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editPost } from "../actions";

const PostForm = (props) => {

    const [post, setPost] = useState({ title: "", content: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    console.log(props);

    const onInputChange = (event) => setPost({ ...post, [event.target.name]: event.target.value });

    const onFormSubmit = (event) => {
        event.preventDefault();
        setErrorMessage("");

        if (props.post?.title) {
            dispatch(editPost(id, post, history.push));
        } else {
            api().post("/posts", post)
                .then((response) => {
                    history.push("/");
                })
                .catch((error) => {
                    setErrorMessage("Başlık ve yazı içeriği zorunludur.")
                });
        }
    }

    useEffect(() => {
        if (props.post?.title && props.post?.content) setPost({ title: props.post.title, content: props.post.content })
    }, [props.post]);

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
                <Link to={`/`}><button className="ui button">
                    İptal Et
                </button></Link>
            </div>
        </React.Fragment>)
};

export default withRouter(PostForm);