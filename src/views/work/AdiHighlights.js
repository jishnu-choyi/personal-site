import styles from "./adi-highlights.module.scss";
import AdiLogo from "../../assets/images/logos/adi/Analog_Devices_Logo-full.png";
import Link from "../../components/Link";

export const adiTravelData = {
    id: "adi-travel",
    itemType: "travel",

    headerLabel: "Travel",
    highlights: <AdiTravelHighlights />,
    locations: [
        { id: "boston", label: "Boston, MA   🇺🇸" },
        { id: "wilmington", label: "Wilmington, MA  🇺🇸" },
    ],
    skillIds: ["patent", "spreadSpectrum"],
};
function AdiTravelHighlights() {
    return (
        <div className={styles["adi-travel-container"]}>
            <div className={styles["col1"]}>
                <b>General Technical Conference</b> held at Boston, MA in 2011
                to
                <b> present a paper</b> on a more efficient self-test method
                using Spread-spectrum technique
            </div>
        </div>
    );
}

export const adiData = {
    id: "adi",
    itemType: "work-exp",
    productType: "hardware",
    commuteType: "onsite",

    headerLabel: "Work > Digital IC design",
    url: "https://www.analog.com/en/index.html",
    urlLabel: "analog.com",
    // footerLabel: "Read more...",

    image: AdiLogo,
    title: "Design Engineer, Analog Devices",
    brief: "Analog Devices India Pvt Ltd, Bengaluru",
    startDate: new Date("1 July 2010"),
    endDate: new Date("31 May 2012"),
    skillIds: ["firmwareAssembly", "signalProcessing", "matlab"],
    highlights: <AdiHighlights />,
};

function AdiHighlights() {
    return (
        <div className={styles["adi-container"]}>
            <ul>
                <li>
                    <b>Developed the firmware</b> (in a proprietary assembly
                    language) required for a MEMs based Accelerometer & Gyro IC
                    developed for automobiles
                </li>
                <li>
                    <b>Published a paper</b> on an improved self-test method
                    using Spread-spectrum at the annual company conference held
                    at Boston, MA.{" "}
                    <b>
                        <Link
                            url="https://patents.google.com/patent/US20140250969"
                            urlLabel="A US patent"
                        />
                    </b>{" "}
                    granted for the same
                </li>
            </ul>
        </div>
    );
}

export default AdiHighlights;
