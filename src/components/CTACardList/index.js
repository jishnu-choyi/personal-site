import styles from "./ctaCardList.module.scss";
import cardStyles from "./ctaCard.module.scss";

function CTACardList() {
    const cardData = [
        {
            title: "Work experience",
            subTitle:
                "Almost everything that I have ever worked on professionally",
            styles: {
                backgroundColor: "#FFFFFF",
            },
            isTop: true,
        },
        {
            title: "Creative projects",
            subTitle: "Those side projects that make you feel alive",
            styles: {
                backgroundColor: "#EBDED4",
            },
        },
        {
            title: "Education",
            subTitle: "Campuses and friends that made me who I am",
            styles: {
                backgroundColor: "#C47F38",
                color: "#FFFFFF",
            },
        },
    ];

    return (
        <div className={styles["container"]}>
            {cardData.map((item, index) => {
                return (
                    <div
                        key={index}
                        id={styles["cta-card-" + index]}
                        className={cardStyles["container"]}
                        style={{
                            ...item.styles,
                            zIndex: cardData.length - index,
                        }}
                    >
                        <div
                            className={`${cardStyles["content"]} ${
                                styles["cta-card-content-" + index]
                            }`}
                        >
                            <div className={cardStyles["left"]}>
                                {item.title}
                            </div>
                            <div className={cardStyles["right"]}>
                                {item.subTitle}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default CTACardList;
