import styles from "./progressBar.module.scss";

function ProgressBar(props) {
    let { progressPct } = props;
    if (progressPct === undefined) progressPct = 50;
    if (progressPct > 100) progressPct = 100;
    else if (progressPct < 0) progressPct = 0;
    return (
        <div className={styles.container}>
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
