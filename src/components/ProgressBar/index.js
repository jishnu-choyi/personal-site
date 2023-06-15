import classNames from "classnames";
import styles from "./progressBar.module.scss";

function ProgressBar(props) {
    const { className, style } = props;
    const containerCls = classNames(styles.container, className);
    let { progressPct } = props;
    if (progressPct === undefined) progressPct = 50;
    if (progressPct > 100) progressPct = 100;
    else if (progressPct < 0) progressPct = 0;

    return (
        <div className={containerCls} style={style}>
            <div
                className={styles.progress}
                style={{
                    width: `${progressPct}%`,
                }}
            ></div>
        </div>
    );
}
export default ProgressBar;
