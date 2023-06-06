import './styles.scss';

function CTAButton({ imageSrc, btnTxt }) {
    return (
        <div className="cta-btn-container">
            <img src={imageSrc} />
            <div className="cta-btn-text">{btnTxt || ''}</div>
        </div>
    );
}
export default CTAButton;