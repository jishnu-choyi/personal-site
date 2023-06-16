import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

function Modal({ onClose, children, actionBar }) {
    useEffect(() => {
        //This is to make sure that body can't be scrolled when modal is open
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    const handleBgClick = () => {
        onClose();
    };

    return ReactDOM.createPortal(
        <div className={styles["con"]}>
            <div className={styles["background"]} onClick={handleBgClick}></div>
            <div className={styles["content"]}>
                <div className={styles["children"]}>{children}</div>
                <div className={styles["action"]}>{actionBar}</div>
            </div>
        </div>,
        document.querySelector(".modal-container")
    );
}

export default Modal;
