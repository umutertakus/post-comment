import React, {useState} from "react";
import { Button, Modal } from "semantic-ui-react";

const DeleteModal = () => {
    const [open, setOpen] = useState(false);
    const show = () => setOpen(true);
    const close = () => setOpen(false);

    return <React.Fragment>
        <Button color="red" onClick={show}>Sil</Button>
        <Modal size="mini" open={open} onClose={close}>
            <Modal.Header>Yazıyı Sil</Modal.Header>
            <Modal.Content>
                <p>Bu yazıyı silmek istediğinizden emin misiniz?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button negative>İptal Et</Button>
                <Button positive icon="delete" labelPosition="right" content="Sil" />
            </Modal.Actions>
        </Modal>
    </React.Fragment>
}

export default DeleteModal;