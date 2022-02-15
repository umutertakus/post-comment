import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";

const PostList = (props) => {

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        api().get("/posts")
            .then(response => {
                setPostList(response.data);
            })
    }, [])

    return (
        <div className="ui relaxed divided list">
            {postList.map(post => {
                return (<div key={post.id} className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <Link to={`/posts/${post.id}`} className="header"> {post.title} </Link>
                        <div className="description"> {post.created_at} </div>
                    </div>
                </div>)
            })} {""} <br />
            <Link to={`/addpost`}><button className="ui primary button">Post Ekle</button></Link>
        </div>
    );
}

export default PostList;