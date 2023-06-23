import classNames from "classnames";
import styles from "./link.module.scss";
import { GoLinkExternal, GoDownload } from "react-icons/go";
import { BsDownload } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";

function Link(props) {
    const { url, urlLabel, download, className, style } = props;
    const clsName = classNames(styles.container, className);
    return (
        <a
            className={clsName}
            style={style}
            href={url}
            download={download}
            aria-label="main link"
            target="_blank"
            rel="noreferrer"
        >
            <span>{urlLabel || url}</span>
            {!!download && <BsDownload />}
            {!download && <RxExternalLink />}
        </a>
    );
}
export default Link;
