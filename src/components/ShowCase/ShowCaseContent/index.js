import "./showCaseContent.module.scss";

function ShowCaseContent(props) {
    const { showCaseData } = props;
    return <div>{showCaseData.highlights}</div>;
}
export default ShowCaseContent;
