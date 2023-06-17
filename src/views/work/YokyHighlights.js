import styles from "./yoky-highlights.module.scss";
import YokyLogo from "../../assets/images/logos/yoky/logo_black-full.png";

export const yokyTravelData = {
    id: "yoky-travel",
    itemType: "travel",
    commuteType: "onsite",

    headerLabel: "Travel",
    highlights: <YokyTravelHighlights />,
    locations: [
        { id: "schenzhen", label: "Shenzhen, China  🇨🇳" },
        { id: "delhi", label: "New Delhi, IN 🇮🇳" },
        { id: "Ganghuaxing", label: "Ganghuaxing Industrial Zone  🇨🇳" },
    ],
    skillIds: ["compliance", "certifications"],
};
function YokyTravelHighlights() {
    return (
        <div className={styles["yoky-travel-container"]}>
            <div className={styles["col1"]}>
                <ul>
                    <li>
                        Single point of contact for wireless labs in Shenzhen
                        and New Delhi
                    </li>
                    <li>
                        Supervised the wireless certification tests and made
                        sure that the products will pass the tests and therefore
                        be <b>ready for manufacturing</b>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export const yokyData = {
    id: "yoky",
    itemType: "work-exp",
    productType: "hardware",

    headerLabel: "Work > Digital IC design",
    url: "https://www.analog.com/en/index.html",
    urlLabel: "analog.com",
    // footerLabel: "Read more...",

    image: YokyLogo,
    title: "Design Engineer, Analog Devices",
    brief: "Analog Devices India Pvt Ltd, Bengaluru",
    startDate: new Date("1 July 2010"),
    endDate: new Date("31 May 2012"),
    skillIds: ["firmwareAssembly", "signalProcessing", "matlab"],
    highlights: <YokyHighlights />,
};

function YokyHighlights() {
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

export default YokyHighlights;
