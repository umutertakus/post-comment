import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import 'moment/locale/tr'

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
                        <div className="description"> <Moment format="LL" locale="tr" >{post.created_at}</Moment>  </div>
                    </div>
                </div>)
            })} {""} <br />
            <Link to={`/addpost`}><button className="ui primary button">Post Ekle</button></Link>
        </div>
    );
}

export default PostList;