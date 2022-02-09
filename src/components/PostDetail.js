import axios from "axios";
import React, { useEffect, useState } from "react";

const PostDetail = (props) => {
    const { id } = props.match.params;
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
            .then((response) => {
                setPostDetail(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
            .then(response => {
                setComments(response.data);
            });
    }, [])

    return (
        <React.Fragment>
            <h2 className="ui header"> {postDetail.title}</h2>
            <p> {postDetail.content} </p>
            <p> {postDetail.created_at} </p>
            <h3>Yorumlar</h3>
            {comments.map(comment => {
                return (<div key={comment.id} className="ui relaxed list">
                    <div className="item">
                        <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" />
                        <div className="content">
                            <a className="header">{comment.display_name}</a>
                            <div className="description">{comment.body}</div>
                        </div>
                    </div>
                </div>)
            })}
            <h3>Yorum Yaz</h3>
            <form className="ui form">
                <div className="ui mini icon input">
                    <input type="text" placeholder="Adınız" />
                </div>
                <textarea placeholder="Yorumunuz" rows="3"></textarea>
                </form>
        </React.Fragment>
    );
};

export default PostDetail;