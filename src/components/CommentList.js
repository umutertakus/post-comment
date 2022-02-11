import React from "react";

const CommentList = (props) => {
    return (
        <React.Fragment>
            <h3>Yorumlar</h3>
            {props.comments.map(comment => {
                return (<div key={comment.id} className="ui relaxed list">
                    <div className="item">
                        <div className="content">
                            <span className="header">{comment.display_name}</span>
                            <div className="description">{comment.body}</div>
                        </div>
                    </div>
                </div>)
            })}
        </React.Fragment>
    )
}

export default CommentList;