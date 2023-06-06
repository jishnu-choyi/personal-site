//CTA stands for Call To Action
import './styles.scss';

function CTACard({ title, subTitle, isTop, styles }) {

    return (<div className={`cta-card-container${isTop ? ' top' : ''}`} style={styles}>
        <div className="left">{title}</div>
        <div className="right">{subTitle}</div>
    </div>)
}
export default CTACard;
