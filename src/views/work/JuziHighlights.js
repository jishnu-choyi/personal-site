import React from "react";
import JuziLogo from "../../assets/images/logos/juzi/logo_full2.png";

export const juziData = {
    id: "juzi",
    itemType: "work-exp",
    productType: "software",

    headerLabel: "Work > B2C e-commerce",
    url: "https://juzifruits.com",
    urlLabel: "juzifruits.com",
    footerLabel: "Read more...",

    image: JuziLogo,
    title: "Founding director (part time)",
    brief: "Juzi Fruits India Pvt. Ltd.",
    startDate: new Date("1 June 2018"),
    endDate: new Date("31 March 2021"),
    skillIds: ["js", "html", "css", "nodejs", "postgresql"],
    highlights: <JuziHighlights />,
};

function JuziHighlights() {
    return (
        <div style={{ padding: "8px" }}>
            <div>Launched & marketed a fruit-bowl subscription service:</div>
            <ul>
                <li>Developed the front-end for the e-commerce site</li>
                <li>Led iOS & Android teams for the Juzi App</li>
                <li>Ran marketing, customer service till 1000 paid users</li>
            </ul>
        </div>
    );
}

export default JuziHighlights;
