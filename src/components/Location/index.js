import styles from "./location.module.scss";
import { IoLocationSharp } from "react-icons/io5";

function Location(props) {
    const { locationLabel } = props;
    return (
        <div className={styles.container} {...props}>
            <IoLocationSharp className={styles.icon} />
            <span>{locationLabel}</span>
        </div>
    );
}
export default Location;
