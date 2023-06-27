import styles from "./iitm-highlights.module.scss";
import IITMLogo from "../../assets/images/logos_webp/iitm/IIT_Madras_Logo_64.webp";
import { HiAcademicCap } from "react-icons/hi";
import Link from "../../components/Link";

export const iitmData = {
    id: "iitm",
    itemType: "education",

    headerLabel: "Education > Engineering",
    url: "https://www.iitm.ac.in/",
    urlLabel: "iitm.ac.in",

    image: IITMLogo,
    title: "Electrical Engineering at IIT Madras, Chennai",
    brief: "Dual degree (Bachelors & Masters 5 years)",
    startDate: new Date("1 June 2005"),
    endDate: new Date("31 May 2010"),
    skillIds: ["cgpa", "physics", "vlsi"],
    highlights: <IITMHighlights />,
};

function IITMHighlights() {
    return (
        <div className={styles.container}>
            <HiAcademicCap />
            <span>Graduate Thesis under</span>
            <Link
                url="https://www.ee.iitm.ac.in/~nagendra"
                urlLabel="Dr. Nagendra Krishnapura"
            />
        </div>
    );
}

export default IITMHighlights;
