import Skills from "../Skills";
import ShowCaseTab from "../ShowCaseTab";
import styles from "./showcase.module.scss";

function ShowCase(props) {
    const { showCaseData } = props;

    return (
        <div className={styles.container}>
            <ShowCaseTab />
            <div className={styles.content}>
                <div className="col-1">{showCaseData.title}</div>
                <div className="col-2">
                    <Skills skillIds={showCaseData.skillIds} />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <ShowCaseTab mergeType="top-left" />
            </div>
        </div>
    );
}
export default ShowCase;
