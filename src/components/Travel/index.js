import ShowCaseTab from "../ShowCase/ShowCaseTab";
import styles from "./travel.module.scss";
import RoundIcon from "../RoundIcon";
import Location from "../Location";
import Skills from "../Skills";

export default function Travel(props) {
    const { showCaseData, hideConnection } = props;
    const renderedLocations = showCaseData.locations.map((location) => {
        return <Location key={location.id} locationLabel={location.label} />;
    });
    const renderedRopes = (
        <div className={styles["rope-con"]}>
            <div className={styles["left-rope"]}></div>
            <div className={styles["right-rope"]}></div>
        </div>
    );

    return (
        <div className={styles.container}>
            {!hideConnection && renderedRopes}
            <div className={styles["top-tab-container"]}>
                <ShowCaseTab
                    {...showCaseData}
                    label={showCaseData.headerLabel}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.col1}>
                    <RoundIcon type="travel" className={styles.icon} />
                    {showCaseData.highlights}
                </div>
                <div className={styles.col2}>
                    <Skills skillIds={showCaseData.skillIds || []} />
                    {renderedLocations}
                </div>
            </div>
        </div>
    );
}
