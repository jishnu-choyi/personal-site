import classNames from "classnames";
import Logo from "../../Logo";
import S from "./showCaseHeader.module.scss";

function ShowCaseHeader(props) {
    const { showCaseData } = props;

    const jobTitleCls = classNames(S["job-title"], S["main-text"]);
    const companyCls = classNames(S["company"], S["sub-text"]);
    const intervalCls = classNames(S["interval"], S["main-text"]);
    const durationCls = classNames(S["duration"], S["sub-text"]);

    return (
        <div className={S["container"]}>
            <Logo image={showCaseData.image} />
            <div className={S["job"]}>
                <div className={jobTitleCls}>{showCaseData.title}</div>
                <div className={companyCls}>{showCaseData.brief}</div>
            </div>
            <div className={S["time"]}>
                <div className={intervalCls}>Apr '21 - Mar '23</div>
                <div className={durationCls}>2 years</div>
            </div>
        </div>
    );
}
export default ShowCaseHeader;
