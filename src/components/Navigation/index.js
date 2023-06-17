import classNames from "classnames";
import styles from "./navigation.module.scss";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";

function Navigation({ onPrev, onNext, prevActive, nextActive }) {
    return (
        <div className={styles["navigation"]}>
            <BsFillArrowLeftCircleFill
                className={classNames(
                    styles["nav-icon"],
                    prevActive ? "" : styles["inactive"]
                )}
                onClick={onPrev}
            />
            <BsFillArrowRightCircleFill
                className={classNames(
                    styles["nav-icon"],
                    nextActive ? "" : styles["inactive"]
                )}
                onClick={onNext}
            />
        </div>
    );
}
export default Navigation;
