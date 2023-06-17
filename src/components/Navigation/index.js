import classNames from "classnames";
import styles from "./navigation.module.scss";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Tooltip } from "@mui/material";
import ToolTipWrapper from "../ToolTipWrapper";

function Navigation({ onPrev, onNext, prevActive, nextActive }) {
    return (
        <div className={styles["navigation"]}>
            <Tooltip title={prevActive ? "Scroll left" : ""} placement="bottom">
                <ToolTipWrapper>
                    <BsFillArrowLeftCircleFill
                        className={classNames(
                            styles["nav-icon"],
                            prevActive ? "" : styles["inactive"]
                        )}
                        onClick={onPrev}
                    />
                </ToolTipWrapper>
            </Tooltip>
            <Tooltip
                title={nextActive ? "Scroll right" : ""}
                placement="bottom"
            >
                <ToolTipWrapper>
                    <BsFillArrowRightCircleFill
                        className={classNames(
                            styles["nav-icon"],
                            nextActive ? "" : styles["inactive"]
                        )}
                        onClick={onNext}
                    />
                </ToolTipWrapper>
            </Tooltip>

            {/* <BsFillArrowLeftCircleFill
                className={classNames(
                    styles["nav-icon"],
                    prevActive ? "" : styles["inactive"]
                )}
                onClick={onPrev}
            /> */}
            {/* <BsFillArrowRightCircleFill
                className={classNames(
                    styles["nav-icon"],
                    nextActive ? "" : styles["inactive"]
                )}
                onClick={onNext}
            /> */}
        </div>
    );
}
export default Navigation;
