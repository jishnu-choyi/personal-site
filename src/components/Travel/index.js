import ShowCaseTab from "../ShowCase/ShowCaseTab";
import styles from "./travel.module.scss";
import RoundIcon from "../RoundIcon";

export default function Travel(props) {
    const { showCaseData } = props;

    return (
        <div className={styles.container}>
            <div className={styles["rope-con"]}>
                <div className={styles["left-rope"]}></div>
                <div className={styles["right-rope"]}></div>
            </div>
            <div className={styles["top-tab-container"]}>
                <ShowCaseTab
                    {...showCaseData}
                    label={showCaseData.headerLabel}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.col2}>{showCaseData.highlights}</div>
                <RoundIcon type="travel" />
            </div>
        </div>
    );
}
