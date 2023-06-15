import classNames from "classnames";
import S from "./location.module.scss";
import { IoLocationSharp } from "react-icons/io5";

function Location(props) {
    const { locationLabel, className, style } = props;
    let containerCls = classNames(S.container, className);
    return (
        <div className={containerCls} style={style}>
            <IoLocationSharp className={S.icon} />
            <span>{locationLabel}</span>
        </div>
    );
}
export default Location;
