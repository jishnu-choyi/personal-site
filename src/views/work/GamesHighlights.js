import styles from "./games-highlights.module.scss";
import GtsLogo from "../../assets/images/logos/gts/logo.642f4f3c.png";

export const gamesTravelData = {
    id: "games-travel",
    itemType: "travel",
    commuteType: "onsite",

    headerLabel: "Travel",
    highlights: <GamesTravelHighlights />,
    locations: [
        { id: "boston", label: "Boston, MA   🇺🇸" },
        { id: "wilmington", label: "Wilmington, MA  🇺🇸" },
    ],
    skillIds: ["patent", "spread-spectrum"],
};
function GamesTravelHighlights() {
    return (
        <div className={styles["games-travel-container"]}>
            <div className={styles["col1"]}>
                Selected to attend the annual company conference (General
                Technical Conference) held at Boston, MA to present a paper on a
                more efficient self-test method using Spread-spectrum technique
            </div>
        </div>
    );
}

export const gamesData = {
    id: "games",
    itemType: "work-exp",
    productType: "hardware",

    headerLabel: "Work > Digital IC design",
    url: "https://www.analog.com/en/index.html",
    urlLabel: "analog.com",
    // footerLabel: "Read more...",

    image: GtsLogo,
    title: "Design Engineer, Analog Devices",
    brief: "Analog Devices India Pvt Ltd, Bengaluru",
    startDate: new Date("1 July 2010"),
    endDate: new Date("31 May 2012"),
    skillIds: ["firmwareAssembly", "signalProcessing", "matlab"],
    highlights: <AdiHighlights />,
};

function AdiHighlights() {
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

export default AdiHighlights;
