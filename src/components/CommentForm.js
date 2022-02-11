import React, { useState } from "react";

const comment_default = {
    display_name: "",
    body: "" 
};

const CommentForm = (props) => {

    const [comment, setComment] = useState(comment_default);
    // setComment(comment_default);

    const handleOnChange = event => {
        setComment({ ...comment, [event.target.name]: event.target.value })
    }

    return (
        <React.Fragment>
            <h3>Yorum Yaz</h3>
            <form className="ui form" onSubmit={(event) => {
                props.handleSubmit(event, comment)
                setComment(comment_default)
                }}>
                <div className="ui mini icon input">
                    <input
                        name="display_name"
                        onChange={handleOnChange}
                        value={comment.display_name}
                        type="text" placeholder="Adınız" />
                </div>
                <textarea
                    name="body"
                    value={comment.body}
                    onChange={handleOnChange}
                    placeholder="Yorumunuz" rows="3"></textarea>
                <button type="submit" className="ui blue button">Gönder</button>
            </form>
        </React.Fragment>
    )
}

export default CommentForm;