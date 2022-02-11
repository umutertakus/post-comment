import { api } from "../api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PostComments from "./PostComments";

const PostDetail = (props) => {
    const { id } = props.match.params;
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
            <p> {postDetail.created_at} </p>
            <PostComments comments={comments} handleSubmit={handleCommentSubmit} />
        </React.Fragment>
    );
};

export default PostDetail;