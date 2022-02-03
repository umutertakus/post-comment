import axios from "axios";
import React, { useEffect, useState } from "react";

const PostDetail = (props) => {
    const { id } = props.match.params;
    const [postDetail, setPostDetail] = useState({});

    useEffect(() => {
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        .then((response) => {
            setPostDetail(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
    <React.Fragment>
    <h2 className="ui header"> {postDetail.title}</h2>
    <p> {postDetail.content} </p>
    <p> {postDetail.created_at} </p>
    </React.Fragment>
    );
};

export default PostDetail;