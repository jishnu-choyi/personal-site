import styles from './ctaCardList.module.scss';
import CTACard from "../CTACard";

function CTACardList() {
    const cardData = [
        {
            title: "Work experience",
            subTitle: "Almost everything that I have ever worked on professionally",
            styles: {
                backgroundColor: "#FFFFFF"
            },
            isTop: true
        },
        {
            title: "Creative projects",
            subTitle: "Those side projects that make you feel alive",
            styles: {
                backgroundColor: "#EBDED4"
            }
        },
        {
            title: "Education",
            subTitle: "Campuses and friends that made me who I am",
            styles: {
                backgroundColor: "#C47F38",
                color: "#FFFFFF"
            }
        }
    ];
    return (
        <div className={styles["container"]}>
            {
                cardData.map((item, index) => {
                    return <CTACard key={index} id={styles['cta-card-' + index]}
                        title={item.title} subTitle={item.subTitle}
                        styles={{ ...item.styles, zIndex: cardData.length - index }}
                    />

                })
            }
        </div>
    );
}
export default CTACardList;