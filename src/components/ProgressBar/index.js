import classNames from "classnames";
import styles from "./progressBar.module.scss";
import { FiLoader } from "react-icons/fi";

function ProgressBar(props) {
    const { className, style } = props;
    let displayType = props.displayType || "bar";
    const containerCls = classNames(
        styles.container,
        className,
        styles[displayType]
    );
    let { progressPct } = props;
    if (progressPct === undefined) progressPct = 50;
    if (progressPct > 100) progressPct = 100;
    else if (progressPct < 0) progressPct = 0;

    const renderedProgressBar = (
        <div className={containerCls} style={style}>
            <div
                className={styles.progress}
                style={{
                    width: `${progressPct}%`,
                }}
            ></div>
        </div>
    );
    const renderedLoader = (
        <div className={containerCls} style={style}>
            <FiLoader />
        </div>
    );

    return displayType === "bar" ? renderedProgressBar : renderedLoader;
}
export default ProgressBar;
