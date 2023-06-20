import classNames from "classnames";
import styles from "./roundIcon.module.scss";
import { IoTrophy } from "react-icons/io5";
import { MdAirplanemodeActive } from "react-icons/md";

function RoundIcon(props) {
    const { type, style, className } = props;
    return (
        <div className={classNames(styles.container, className)} style={style}>
            {type === "travel" && (
                <MdAirplanemodeActive className={styles["travel-icon"]} />
            )}
            {type === "trophy" && <IoTrophy />}
        </div>
    );
}

export default RoundIcon;
