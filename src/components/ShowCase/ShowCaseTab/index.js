import styles from "./showCaseTab.module.scss";

function ShowCaseTab(props) {
    const { mergeType } = props;
    let showLeft = false,
        showRight = true;
    let mergeClassLeft = mergeType,
        mergeClassRight = mergeType,
        baseClass = "bottom";
    switch (mergeType) {
        case "top-left":
            showLeft = true;
            showRight = false;
            baseClass = "top";
            break;
        case "top-right":
            showRight = true;
            showLeft = false;
            baseClass = "top";
            break;
        case "bottom-center":
            showLeft = true;
            showRight = true;
            mergeClassLeft = "bottom-left";
            mergeClassRight = "bottom-right";
            break;
        case "top-center":
            showLeft = true;
            showRight = true;
            mergeClassLeft = "top-left";
            mergeClassRight = "top-right";
            baseClass = "top";
            break;
        case "bottom-left":
            showLeft = true;
            showRight = false;
            break;
        case "bottom-right":
        default:
            mergeClassRight = "bottom-right";
            showLeft = false;
            showRight = true;
            baseClass = "bottom";
            break;
    }

    return (
        <div className={`${styles.header} ${styles[baseClass]}`}>
            {showLeft && (
                <div className={styles.left}>
                    <div
                        className={`${styles.forefront} ${styles[mergeClassLeft]}`}
                    ></div>
                </div>
            )}
            <div className={`${styles.center} ${styles[baseClass]}`}>
                tab content
            </div>
            {showRight && (
                <div className={styles.right}>
                    <div
                        className={`${styles.forefront} ${styles[mergeClassRight]}`}
                    ></div>
                </div>
            )}
        </div>
    );
}
export default ShowCaseTab;
