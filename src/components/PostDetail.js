import { api } from "../api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PostComments from "./PostComments";
import { Link, useParams, useHistory } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const PostDetail = () => {
    const { id } = useParams();
    const history = useHistory();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);

    const handleCommentSubmit = (event, comment) => {
        event.preventDefault();
        api().post(`/posts/${id}/comments`, comment)
            .then((response) => {
                setComments([...comments, response.data]);
            }).catch(error => {
                console.log(error);
            })
    };

    useEffect(() => {
        axios.all([
            api().get(`/posts/${id}`),
            api().get(`/posts/${id}/comments`),
        ])
            .then((responses) => {
                setPostDetail(responses[0].data);
                setComments(responses[1].data);
            }).catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <React.Fragment>
            <h2 className="ui header"> {postDetail.title}</h2>
            <p> {postDetail.content} </p>
            <div className="ui buttons">
                <Link className="ui blue button" to={`/posts/${postDetail.id}/edit`}>Düzenle</Link>
                <DeleteModal post={postDetail} push={history.push} />
            </div>
            <p> {postDetail.created_at} </p>
            <PostComments comments={comments} handleSubmit={handleCommentSubmit} />
        </React.Fragment>
    );
};

export default PostDetail;