import React from "react";
import AdiLogo from "../../assets/images/logos/adi/Analog_Devices_Logo-full.png";
import styles from "./adi-highlights.module.scss";
import Location from "../../components/Location";
import RoundIcon from "../../components/RoundIcon";

export const adiTravelData = {
    id: "adi-travel",
    itemType: "travel",

    headerLabel: "Travel",
    highlights: <AdiTravelHighlights />,
    locations: [
        { id: "boston", label: "Boston, MA   🇺🇸" },
        { id: "wilmington", label: "Wilmington, MA  🇺🇸" },
    ],
    skillIds: ["patent", "spread-spectrum"],
};
function AdiTravelHighlights() {
    return (
        <div className={styles["travel-container"]}>
            <div className={styles["col1"]}>
                Selected to attend the annual company conference (General
                Technical Conference) held at Boston, MA to present a paper on a
                more efficient self-test method using Spread-spectrum technique
                {/* <div className={styles["location-con"]}>
                    <Location locationLabel="Boston, MA 🇺🇸" />
                    <Location locationLabel="Wilmington, MA 🇺🇸" />
                </div> */}
            </div>
            {/* <RoundIcon type="trophy" /> */}
        </div>
    );
}

export const adiData = {
    id: "adi",
    itemType: "work-exp",
    productType: "hardware",

    headerLabel: "Work > Digital IC design",
    url: "https://www.analog.com/en/index.html",
    urlLabel: "analog.com",
    // footerLabel: "Read more...",

    image: AdiLogo,
    title: "Design Engineer, Analog Devices",
    brief: "Analog Devices India Pvt Ltd, Bengaluru",
    startDate: new Date("1 August 2010"),
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
