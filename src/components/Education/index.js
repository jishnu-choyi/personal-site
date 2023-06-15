import ShowCaseContent from "../ShowCase/ShowCaseContent";
import ShowCaseHeader from "../ShowCase/ShowCaseHeader";
import ShowCaseTab from "../ShowCase/ShowCaseTab";
import Skills from "../Skills";
import styles from "./education.module.scss";

function Education(props) {
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
                <ShowCaseTab
                    {...showCaseData}
                    label={showCaseData.headerLabel}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.col1}>
                    <ShowCaseHeader
                        {...props}
                        style={
                            showCaseData.highlights ? {} : { height: "100%" }
                        }
                    />
                    {showCaseData.highlights && <ShowCaseContent {...props} />}
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

export default Education;
