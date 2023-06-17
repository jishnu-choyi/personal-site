import { useState } from "react";
import styles from "./galleryWithModal.module.scss";
import Modal from "../Modal";
import Gallery from "../Gallery";

function GalleryWithModal({ gallerySlides, style, className }) {
    const [showModal, setShowModal] = useState(false);
    const handleExpand = () => {
        console.log("handle expand");
        setShowModal(!showModal);
    };
    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div className="flex">
            actionBar
            {/* <Button2 primary  onClick={handleClose}>I accept</Button2>
        <Button2 secondary onClick={handleClose}>Cancel</Button2> */}
        </div>
    );
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <Gallery gallerySlides={gallerySlides} />
        </Modal>
    );

    return (
        <div className={styles["container"]}>
            {showModal && modal}
            <Gallery
                gallerySlides={gallerySlides}
                style={style}
                className={className}
                onExpand={handleExpand}
            />
        </div>
    );
}
export default GalleryWithModal;
