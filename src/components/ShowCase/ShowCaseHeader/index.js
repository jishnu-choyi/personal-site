import classNames from "classnames";
import Logo from "../../Logo";
import S from "./showCaseHeader.module.scss";
import { formatDuration, getMonthAndYear } from "../../../utils/timeUtils";
import Commute from "../../Commute";

function ShowCaseHeader(props) {
    const { showCaseData, style } = props;
    const { startDate, endDate, commuteType } = showCaseData;

    const jobTitleCls = classNames(S["job-title"], S["main-text"]);
    const companyCls = classNames(S["company"], S["sub-text"]);
    const intervalCls = classNames(S["interval"], S["main-text"]);
    const durationCls = classNames(S["duration"], S["sub-text"]);

    const renderedInterval = [
        getMonthAndYear(startDate),
        getMonthAndYear(endDate),
    ].join(" - ");
    const renderedDuration = formatDuration(startDate, endDate);

    return (
        <div className={S["container"]} style={style}>
            <Logo image={showCaseData.image} />
            <div className={S["job"]}>
                <div className={jobTitleCls}>{showCaseData.title}</div>
                <div className={companyCls}>{showCaseData.brief} </div>
            </div>
            <div className={S["time"]}>
                <div className={intervalCls}>{renderedInterval}</div>
                <div className={durationCls}>
                    {renderedDuration}{" "}
                    {commuteType && <Commute commuteType={commuteType} />}
                </div>
            </div>
        </div>
    );
}
export default ShowCaseHeader;
