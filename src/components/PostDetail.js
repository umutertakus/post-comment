import React, { useEffect } from "react";
import PostComments from "./PostComments";
import { Link, useParams, useHistory } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import Moment from "react-moment";
import 'moment/locale/tr'
import { addComment, callPost } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const PostDetail = () => {
    const { id } = useParams();
    const history = useHistory();
    const postDetail = useSelector(state => state.postDetail);
    const dispatch = useDispatch();

    const handleCommentSubmit = (event, comment) => {
        event.preventDefault();
        dispatch(addComment(id, comment));
    };

    useEffect(() => {
        dispatch(callPost(id))
    }, [])

    return (
        <React.Fragment>
            <h2 className="ui header"> {postDetail.title}</h2>
            <p> {postDetail.content} </p>
            <div className="ui buttons">
                <Link className="ui blue button" to={`/posts/${postDetail.id}/edit`}>Düzenle</Link>
                <DeleteModal post={postDetail} />
            </div>
            <p> <Moment format="lll" >{postDetail.created_at}</Moment>  </p>
            <PostComments comments={postDetail.comments} handleSubmit={handleCommentSubmit} />
        </React.Fragment>
    );
};

export default PostDetail;