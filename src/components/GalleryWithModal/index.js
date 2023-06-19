import { useState } from "react";
import styles from "./galleryWithModal.module.scss";
import Modal from "../Modal";
import Gallery from "../Gallery";
import classNames from "classnames";

function GalleryWithModal({
    gallerySlides,
    style,
    className,
    containerClassName,
    containerStyle,
}) {
    const [showModal, setShowModal] = useState(false);
    const handleExpand = () => {
        setShowModal(!showModal);
    };
    const handleClose = () => {
        setShowModal(false);
    };

    const modal = (
        <Modal onClose={handleClose}>
            <Gallery gallerySlides={gallerySlides} onCollapse={handleClose} />
        </Modal>
    );

    return (
        <div
            className={classNames(styles["container"], containerClassName)}
            style={containerStyle}
        >
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
