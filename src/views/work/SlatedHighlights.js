import React from "react";
import SlatedLogo from "../../assets/images/logos/slated/slated-full-logo.png";

export const slatedData = {
    id: "slated",
    itemType: "work-exp",
    productType: "software",

    headerLabel: "Work > SaaS software",
    url: "https://slated.ai",
    urlLabel: "slated.ai",
    footerLabel: "Read more...",

    image: SlatedLogo,
    title: "Technical Co-founder, Slated.ai",
    brief: "Slated Technologies Inc, Dover, DE 19901",
    startDate: new Date("1 April 2021"),
    endDate: new Date("31 March 2023"),
    skillIds: [
        "ts",
        "angular",
        "nodejs",
        "mongodb",
        "nginx",
        "gcp",
        "nvidiaRiva",
        "devOps",
        // "jira",
        "mlOps",
        // "docker",
        // "kubernetes",
    ],
    highlights: <SlatedHighlights />,
};

function SlatedHighlights() {
    return (
        <div style={{ padding: "8px" }}>
            <div>
                Led the product development team from ideation to MVP launch
            </div>
            <ul>
                <li>
                    Developed the recommendation engine for best-time
                    suggestions
                </li>
                <li>
                    Prototyped a Slated.AI note-taker for speech-to-text at
                    low-cost without using Google speech or any other paid APIs
                    (Open source Nvidia Riva)
                </li>
                <li>
                    Wrote 90% of the frontend and 50% of the backend - product &
                    admin portal
                </li>
            </ul>
        </div>
    );
}

export default SlatedHighlights;
