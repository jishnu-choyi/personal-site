//CTA stands for Call To Action
import './styles.scss';

function CTACard({ id, title, subTitle, styles }) {

    return (
        <div id={id} className="cta-card-container" style={styles}>
            <div className="cta-card-content">
                <div className="cta-card-container-left">{title}</div>
                <div className="cta-card-container-right">{subTitle}</div>
            </div>
        </div>)
}
export default CTACard;
