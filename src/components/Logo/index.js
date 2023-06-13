import logoStyles from "./logo.module.scss";

function Logo(props) {
    const { image, alt, styles } = props;
    return (
        <div className={{ ...logoStyles.container, ...styles }}>
            <img src={image} alt={alt || "logo image"} />
        </div>
    );
}
export default Logo;
