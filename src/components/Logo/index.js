import logoStyles from "./logo.module.scss";

function Logo(props) {
    const { image, alt } = props;
    let styles = props.styles || {};
    return (
        <div className={logoStyles.container} style={{ ...styles }}>
            <img src={image} alt={alt || "logo image"} />
        </div>
    );
}
export default Logo;
