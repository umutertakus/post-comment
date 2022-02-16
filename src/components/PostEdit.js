import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostForm from "./PostForm";

const PostEdit = (props) => {
    const { id } = useParams;

    const post = useSelector((state) => state.postDetail);

    return <div>
        <h1>Yazı Düzenleme Formu</h1>
        <PostForm post={post}/> </div>
}

export default PostEdit;