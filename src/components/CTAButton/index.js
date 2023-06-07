import styles from './ctaButton.module.scss';

function CTAButton({ imageSrc, btnTxt }) {
    return (
        <div className={styles["container"]}>
            <img src={imageSrc} alt='button' />
            <div className={styles["text"]}>{btnTxt || ''}</div>
        </div>
    );
}
export default CTAButton;