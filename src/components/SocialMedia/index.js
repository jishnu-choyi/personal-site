import styles from "./socialMedia.module.scss";
import LinkIcon from "../LinkIcon";

function SocialMedia() {
    return (
        <div className={styles["header"]}>
            <div className={styles["icon-container"]}>
                <LinkIcon
                    iconName="twitter"
                    url="https://twitter.com/cjishnu"
                />
                <LinkIcon
                    iconName="linkedin"
                    url="https://www.linkedin.com/in/jishnu-choyi-5a358a18/"
                />
                <LinkIcon
                    iconName="email"
                    url={`mailto:c.jishnu@gmail.com?subject=Hello from ${window.location.hostname}&body= Hi, `}
                />
                <LinkIcon iconName="call" url="tel:+919620812268" />
                <LinkIcon
                    iconName="github"
                    url="https://github.com/jishnu-choyi"
                />
            </div>
        </div>
    );
}
export default SocialMedia;
