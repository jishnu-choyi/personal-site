import classNames from "classnames";
import styles from "./link.module.scss";
import { GoLinkExternal } from "react-icons/go";

function Link(props) {
    const { url, urlLabel, className, style } = props;
    const clsName = classNames(styles.container, className);
    return (
        <a
            className={clsName}
            style={style}
            href={url}
            aria-label="main link"
            target="_blank"
            rel="noreferrer"
        >
            <span>{urlLabel || url}</span>
            <GoLinkExternal />
        </a>
    );
}
export default Link;
