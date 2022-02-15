import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { api } from "../api"

const DeleteModal = ({ post, push }) => {
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMesage] = useState("");
    const show = () => setOpen(true);
    const close = () => setOpen(false);

    const handleDelete = (id) => {
        api()
            .delete(`/posts/${id}`)
            .then(() => {
                setErrorMesage("");
                close();
                push(`/`);
            })
            .catch(() => {
                setErrorMesage("Yazıyı silerken bir hata oluştu.");
            })
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