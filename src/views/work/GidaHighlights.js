import styles from "./gida-highlights.module.scss";
import React from "react";
import GidaLogo from "../../assets/images/logos/gida/logo.png";
import Link from "../../components/Link";

export const gidaData = {
    id: "gida",
    itemType: "work-exp",
    productType: "software",
    commuteType: "onsite",

    headerLabel: "Work > B2B Software services",
    url: "https://gida.in",
    urlLabel: "gida.in",
    // footerLabel: "Read more...",

    image: GidaLogo,
    title: "Full Stack Development",
    brief: "Gida Fruits India Pvt. Ltd., Bengaluru",
    startDate: new Date("1 June 2012"),
    endDate: new Date("31 March 2021"),
    skillIds: [
        "js",
        "ts",
        "angular",
        "react",
        "html",
        "css",
        "nodejs",
        "postgresql",
        "threejs",
        "socket",
        "webrtc",
        "git",
        // "gitlab",
        "nginx",
        "php",
    ],
    highlights: <GidaHighlights />,
};

function GidaHighlights() {
    return (
        <div className={styles["gida-container"]}>
            <div className={styles["summary"]}>
                Finished several high-value projects for top companies, startups
                and non-profits
            </div>
            <ul>
                <li>
                    <b>
                        Client:{" "}
                        <Link
                            url="https://prismforce.ai"
                            urlLabel="Prismforce.ai"
                        ></Link>
                    </b>{" "}
                    - Built the first version of the front-end for their SaaS
                    product which eventually raised
                    <b>$13.6m</b> from Sequoia
                </li>
                <li>
                    <b>Client: Going to school non-profit</b> - Numerous
                    web-apps, internal admin portals, data entry apps on Android
                </li>
                <li>
                    <b>Client: Star TV</b> - Implemented a data visualization
                    dashboard to to visualize all TV channels along with their
                    demographics using clustering algorithm
                </li>
            </ul>
        </div>
    );
}

export default GidaHighlights;
