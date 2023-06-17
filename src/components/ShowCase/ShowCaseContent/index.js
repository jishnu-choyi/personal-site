import styles from "./showCaseContent.module.scss";

function ShowCaseContent(props) {
    const { showCaseData } = props;
    return <div className={styles.container}>{showCaseData.highlights}</div>;
}
export default ShowCaseContent;
