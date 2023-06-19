import classNames from "classnames";
import Link from "../../Link";
import styles from "./showCaseTab.module.scss";

function ShowCaseTab(props) {
    const { mergeType, label, url, urlLabel, itemType } = props;
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
    const colorCls = classNames(
        itemType === "education" ? styles["green"] : "",
        itemType === "travel" ? styles["brown"] : "",
        itemType === "work-exp" ? styles["blue"] : "",
        itemType === "creative" ? styles["purple"] : ""
    );

    return (
        <div className={`${styles.header} ${styles[baseClass]} ${colorCls}`}>
            {showLeft && (
                <div className={`${styles["left"]} ${colorCls}`}>
                    <div
                        className={`${styles.forefront} ${styles[mergeClassLeft]}`}
                    ></div>
                </div>
            )}
            <div className={`${styles.center} ${styles[baseClass]}`}>
                <span>{label}</span>
                {url && (
                    <Link
                        url={url}
                        urlLabel={urlLabel}
                        className={styles.link}
                    />
                )}
            </div>
            {showRight && (
                <div className={`${styles["right"]} ${colorCls}`}>
                    <div
                        className={`${styles.forefront} ${styles[mergeClassRight]}`}
                    ></div>
                </div>
            )}
        </div>
    );
}
export default ShowCaseTab;
