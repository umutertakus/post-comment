import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import 'moment/locale/tr'
import { useSelector, useDispatch } from "react-redux";
import { callPostList } from "../actions";

const PostList = (props) => {

    const postList = useSelector((state) => state.postList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callPostList());
    }, [])

    return (
        <div className="ui relaxed divided list">
            {postList.map(post => {
                return (<div key={post.id} className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <Link to={`/posts/${post.id}`} className="header"> {post.title} </Link>
                        <div className="description"> <Moment format="lll" locale="tr" >{post.created_at}</Moment>  </div>
                    </div>
                </div>)
            })} {""} <br />
            <Link to={`/addpost`}><button className="ui primary button">Post Ekle</button></Link>
        </div>
    );
}

export default PostList;