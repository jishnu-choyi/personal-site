import styles from "./scrappy-highlights.module.scss";
import ScrappyLogo from "../../assets/images/logos/scrappy/scrappy-logo.png";
import GalleryWithModal from "../../components/GalleryWithModal";

export const scrappyTravelData = {
    id: "scrappy-travel",
    itemType: "travel",
    commuteType: "onsite",

    headerLabel: "Travel",
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
    productType: "hardware",

    headerLabel: "Work > Digital IC design",
    url: "https://www.analog.com/en/index.html",
    urlLabel: "analog.com",
    // footerLabel: "Read more...",

    image: ScrappyLogo,
    title: "Design Engineer, Analog Devices",
    brief: "Analog Devices India Pvt Ltd, Bengaluru",
    startDate: new Date("1 July 2010"),
    endDate: new Date("31 May 2012"),
    skillIds: ["firmwareAssembly", "signalProcessing", "matlab"],
    highlights: <ScrappyHighlights />,
};

function ScrappyHighlights() {
    return (
        <div style={{ padding: "8px" }}>
            <ul>
                <li>
                    Developed the firmware (in a proprietary assembly language)
                    required for a MEMs based Accelerometer & Gyro IC developed
                    for automobiles
                </li>
                <li>
                    Published a paper on an improved self-test method using
                    Spread-spectrum at the annual company conference held at
                    Boston, MA. A US patent granted for the same
                </li>
            </ul>
        </div>
    );
}

export default ScrappyHighlights;
