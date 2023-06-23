import styles from "./showcase.module.scss";
import Skills from "../Skills";
import ShowCaseTab from "./ShowCaseTab";
import ShowCaseHeader from "./ShowCaseHeader";
import ShowCaseContent from "./ShowCaseContent";
import classNames from "classnames";

function ShowCase(props) {
    const { showCaseData } = props;
    const col1Cls = classNames(styles.col1, styles[showCaseData.itemType]);
    const col2Cls = classNames(styles.col2, styles[showCaseData.itemType]);

    return (
        <div className={classNames(styles.container, showCaseData.id)}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: "8px",
                }}
            >
                <ShowCaseTab
                    {...showCaseData}
                    label={showCaseData.headerLabel}
                />
            </div>
            <div className={styles.content}>
                <div className={col1Cls}>
                    <ShowCaseHeader {...props} />
                    <ShowCaseContent {...props} />
                </div>
                <div className={col2Cls}>
                    <Skills skillIds={showCaseData.skillIds} />
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: "8px",
                }}
            >
                {showCaseData.footerLabel && (
                    <ShowCaseTab
                        mergeType="top-left"
                        label={showCaseData.footerLabel || "Read more..."}
                    />
                )}
            </div>
        </div>
    );
}
export default ShowCase;
