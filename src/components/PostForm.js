import React from "react";

const PostForm = () => {
    return (
        <div className="ui form">
            <div className="field">
                <label>Yazı Başlığı</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Yazı İçeriği</label>
                <textarea rows="3"></textarea>
            </div>
            <button className="ui primary button">
                Gönder
            </button>
            <button className="ui button">
                İptal Et
            </button>
        </div>)
};

export default PostForm;