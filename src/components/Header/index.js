import styles from "./header.module.scss";
import Logo from "../../assets/images/logos_webp/logo-outline-transparent_64.webp";

function Header() {
    return (
        <div className={styles.header}>
            <img src={Logo} alt="JC logo" />
        </div>
    );
}
export default Header;
