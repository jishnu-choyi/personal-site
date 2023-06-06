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
            subTitle: "Campuses and network that made me who I am",
            styles: {
                backgroundColor: "#C47F38",
                color: "#FFFFFF"
            }
        }
    ];
    return (
        <div className="cta-card-list-container">
            {
                cardData.map((item, index) => {
                    return <CTACard key={index}
                        title={item.title} subTitle={item.subTitle}
                        isTop={index === 0}
                        styles={{ ...item.styles, zIndex: cardData.length - index, top: -(index * 32) + 'px' }}
                    />
                })
            }
        </div>
    );
}
export default CTACardList;