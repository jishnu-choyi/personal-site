import styles from "./showcase.module.scss";
import Skills from "../Skills";
import ShowCaseTab from "./ShowCaseTab";
import ShowCaseHeader from "./ShowCaseHeader";
import ShowCaseContent from "./ShowCaseContent";

function ShowCase(props) {
    const { showCaseData } = props;

    return (
        <div className={styles.container}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: "8px",
                }}
            >
                <ShowCaseTab />
            </div>
            <div className={styles.content}>
                <div className={styles.col1}>
                    <ShowCaseHeader {...props} />
                    <ShowCaseContent {...props} />
                </div>
                <div className={styles.col2}>
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
                <ShowCaseTab mergeType="top-left" />
            </div>
        </div>
    );
}
export default ShowCase;
