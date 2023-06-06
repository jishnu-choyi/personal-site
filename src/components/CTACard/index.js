//CTA stands for Call To Action
import './styles.scss';

function CTACard({ title, subTitle, backgroundColor }) {

    return (<div className="cta-card-container" style={{ backgroundColor }}>
        <div className="left">{title}</div>
        <div className="right">{subTitle}</div>
    </div>)
}
export default CTACard;
