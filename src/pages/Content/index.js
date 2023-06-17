import styles from "./content.module.scss";
import Education from "../../components/Education";
import ShowCase from "../../components/ShowCase";
import Travel from "../../components/Travel";
import showCases from "../../views/work/work-data";

function Content() {
    const renderedShowCases = showCases.map((data) => {
        if (data.itemType === "travel") {
            return <Travel key={data.id} showCaseData={data} />;
        } else if (data.itemType === "education") {
            return <Education key={data.id} showCaseData={data} />;
        } else if (data.itemType === "work-exp") {
            return <ShowCase key={data.id} showCaseData={data} />;
        }
    });

    return <div className={styles["container"]}>{renderedShowCases}</div>;
}
export default Content;
