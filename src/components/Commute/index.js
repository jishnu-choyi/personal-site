import styles from "./commute.module.scss";
//import IoLocationSharp from "react-icons/io";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { BsPersonVideo2 } from "react-icons/bs";
import { BsPersonVideo3 } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";

function Commute(props) {
    const { commuteType } = props;
    let commuteLabel = "Remote";
    switch (commuteType) {
        case "hybrid":
            commuteLabel = "Hybrid";
            break;
        case "onsite":
            commuteLabel = "Onsite";
            break;
        case "remote":
        default:
            commuteLabel = "Remote";
            break;
    }

    return (
        <div className={styles.container}>
            {commuteType === "remote2" && (
                <MdOutlineVideoCameraFront className={styles.icon} />
            )}
            {commuteType === "remote" && (
                <BsPersonVideo2 className={styles.icon} />
            )}
            {commuteType === "hybrid" && (
                <BsPersonVideo3 className={styles.icon} />
            )}
            {commuteType === "onsite" && (
                <BsPersonFill className={styles.icon} />
            )}
            <span>{commuteLabel}</span>
        </div>
    );
}
export default Commute;
