import styles from "./ensea-highlights.module.scss";
import EnseaLogo from "../../assets/images/logos/ensea/logo.png";

export const enseaData = {
    id: "ensea",
    itemType: "education",

    headerLabel: "Education > Internship",
    url: "https://www.ensea.fr/en",
    urlLabel: "ensea.fr",

    image: EnseaLogo,
    title: "Summer Internship, Neurocybernetics team",
    brief: "ETIS Lab, ENSEA, University Cergy-Pontoise, France - CNRS",
    startDate: new Date("1 May 2008"),
    endDate: new Date("31 July 2008"),
    skillIds: ["firmwareC", "robotics"],
    locations: [{ id: "paris", label: "Cergy-Pontoise, France 🇫🇷" }],
    highlights: <EnseaHighlights />,
};

function EnseaHighlights() {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    Developed firmware to implement a color-detection algorithm
                    for an outdoor bot
                </li>
            </ul>
        </div>
    );
}

export default EnseaHighlights;
