import classNames from "classnames";
import styles from "./navigation.module.scss";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ToolTipWrapper from "../ToolTipWrapper";

function Navigation({ onPrev, onNext, prevActive, nextActive }) {
    return (
        <div className={styles["navigation"]}>
            <ToolTipWrapper
                title={prevActive ? "Scroll left" : ""}
                placement="bottom"
                arrow
            >
                <BsFillArrowLeftCircleFill
                    className={classNames(
                        styles["nav-icon"],
                        prevActive ? "" : styles["inactive"]
                    )}
                    onClick={onPrev}
                />
            </ToolTipWrapper>
            <ToolTipWrapper
                title={nextActive ? "Scroll right" : ""}
                placement="bottom"
                arrow
            >
                <BsFillArrowRightCircleFill
                    className={classNames(
                        styles["nav-icon"],
                        nextActive ? "" : styles["inactive"]
                    )}
                    onClick={onNext}
                />
            </ToolTipWrapper>
        </div>
    );
}
export default Navigation;
