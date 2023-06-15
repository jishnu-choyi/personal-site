import ShowCaseTab from "../ShowCase/ShowCaseTab";
import styles from "./travel.module.scss";
import RoundIcon from "../RoundIcon";
import Location from "../Location";

export default function Travel(props) {
    const { showCaseData } = props;
    const renderedLocations = showCaseData.locations.map((location) => {
        return <Location key={location.id} locationLabel={location.label} />;
    });

    return (
        <div className={styles.container}>
            <div className={styles["rope-con"]}>
                <div className={styles["left-rope"]}></div>
                <div className={styles["right-rope"]}></div>
            </div>
            <div className={styles["top-tab-container"]}>
                <ShowCaseTab
                    {...showCaseData}
                    label={showCaseData.headerLabel}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.col1}>
                    <RoundIcon type="travel" style={{ marginLeft: "16px" }} />
                    {showCaseData.highlights}
                </div>
                <div className={styles.col2}>{renderedLocations}</div>
            </div>
        </div>
    );
}
