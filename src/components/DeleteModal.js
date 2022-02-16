import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import { deletePost } from "../actions";

const DeleteModal = ({ post }) => {
    const [open, setOpen] = useState(false);
    const errorMessage = useSelector(state => state.deletePostError)
    const show = () => setOpen(true);
    const close = () => setOpen(false);
    const { push } = useHistory();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletePost(id, close, push));
    }

    return <React.Fragment>
        <Button color="red" onClick={show}>Sil</Button>
        <Modal size="mini" open={open} onClose={close}>
            <Modal.Header>Yazıyı Sil</Modal.Header>
            <Modal.Content>
                <p> <b style={{fontSize: "16px"}}>{post.title}</b> başlıklı yazıyı silmek istediğinizden emin misiniz?</p>
                {errorMessage && <p>{errorMessage}</p> }
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={close} negative>İptal Et</Button>
                <Button onClick={() => handleDelete(post.id)} positive icon="delete" labelPosition="right" content="Sil" />
            </Modal.Actions>
        </Modal>
    </React.Fragment>
}

export default DeleteModal;