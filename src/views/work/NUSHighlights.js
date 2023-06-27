import styles from "./nus-highlights.module.scss";
import NusLogoHalf from "../../assets/images/logos_webp/nus/NUS_coat_of_arms_64.webp";

export const nusData = {
    id: "nus",
    itemType: "education",

    headerLabel: "Education > Exchange program",
    url: "https://nus.edu.sg/",
    urlLabel: "nus.edu.sg",

    image: NusLogoHalf,
    title: "Exchange Student at National University of Singapore (NUS)",
    brief: "Selected based on academic performance",
    startDate: new Date("1 Jul 2008"),
    endDate: new Date("31 Dec 2008"),
    skillIds: ["electrical", "physics"],
    locations: [{ id: "singapore", label: "Singapore 🇸🇬" }],
    highlights: <NusHighlights />,
};

function NusHighlights() {
    return (
        <div className={styles.container}>
            <ul>
                <li>One semester as exchange student (Electrical engg.)</li>
            </ul>
        </div>
    );
}

export default NusHighlights;
