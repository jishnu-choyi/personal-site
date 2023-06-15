import styles from "./roundIcon.module.scss";
import { IoTrophy } from "react-icons/io5";
import { MdAirplanemodeActive } from "react-icons/md";

function RoundIcon(props) {
    const { type, style } = props;
    return (
        <div className={styles.container} style={style}>
            {type === "travel" && (
                <MdAirplanemodeActive className={styles["travel-icon"]} />
            )}
            {type === "trophy" && <IoTrophy />}
        </div>
    );
}

export default RoundIcon;
