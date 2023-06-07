//CTA stands for Call To Action
import cardStyles from './ctaCard.module.scss';

function CTACard({ id, title, subTitle, styles }) {

    return (
        <div id={id} className={cardStyles["container"]} style={styles}>
            <div className={cardStyles["content"]}>
                <div className={cardStyles["left"]}>{title}</div>
                <div className={cardStyles["right"]}>{subTitle}</div>
            </div>
        </div>)
}
export default CTACard;
