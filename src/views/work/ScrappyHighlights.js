import styles from "./scrappy-highlights.module.scss";
import ScrappyLogo from "../../assets/images/logos/scrappy/scrappy-logo.png";
import GalleryWithModal from "../../components/GalleryWithModal";
import Link from "../../components/Link";

export const scrappyTravelData = {
    id: "scrappy-travel",
    itemType: "travel",
    commuteType: "onsite",

    headerLabel: "Travel for work",
    highlights: <ScrappyTravelHighlights />,
    skillIds: ["probono", "teaching", "diy"],
    locations: [
        { id: "bhagalpur", label: "Bhagalpur, Bihar  🇮🇳" },
        { id: "mumbai", label: "Mumbai, MH  🇮🇳" },
    ],
};
function ScrappyTravelHighlights() {
    return (
        <div className={styles["scrappy-travel-container"]}>
            <div className={styles["col1"]}>
                Helped school kids create DIY racing cars for an event called
                “Scrappy races” as part of the Scrappy News project at
                Bhagalpur, Bihar
            </div>
            <div className={styles["col2"]}>
                <GalleryWithModal
                    style={{ width: "100%", height: "200px" }}
                    gallerySlides={[
                        {
                            type: "video",
                            id: "1",
                            youtubeUrl: "mCuhrYqGtjI",
                            aspectRatio: 16 / 9,
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export const scrappyData = {
    id: "scrappy",
    itemType: "work-exp",
    productType: "software",

    headerLabel: "Work > Web & mobile apps",
    url: "https://www.scrappynews.com/",
    urlLabel: "scrappynews.com",
    // footerLabel: "Read more...",

    image: ScrappyLogo,
    title: "Scrappy News Web & Mobile app",
    brief: "Software services as part of Gida Technologies India Pvt. Ltd., Bengaluru",
    startDate: new Date("1 Jan 2016"),
    endDate: new Date("31 May 2018"),
    skillIds: [
        "threejs",
        "glsl",
        "js",
        "html",
        "css",
        "nodejs",
        "postgresql",
        "cordova",
    ],
    highlights: <ScrappyHighlights />,
};

function ScrappyHighlights() {
    return (
        <div className={styles["scrappy-container"]}>
            <ul>
                <li>
                    Developed <b>web-app</b> and the{" "}
                    <b>internal admin portal</b> for the childrens’ news show
                    (1st version)
                </li>
                <li>
                    Developed the <b>Android app</b> "scrAPP" for the news show
                    and 10 data entry apps
                </li>
                <li>
                    <b>Client:</b> Non-profit Going to School, India (
                    <Link
                        url="https://www.goingtoschool.com/"
                        urlLabel="goingtoschool.com"
                    />
                    )
                </li>
            </ul>
        </div>
    );
}

export default ScrappyHighlights;
