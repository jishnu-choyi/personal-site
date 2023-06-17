import React from "react";
import GidaLogo from "../../assets/images/logos/gida/logo.png";
import Location from "../../components/Location";
import Commute from "../../components/Commute";

export const gidaData = {
    id: "gida",
    itemType: "work-exp",
    productType: "software",
    commuteType: "onsite",

    headerLabel: "Work > B2C e-commerce",
    url: "https://juzifruits.com",
    urlLabel: "juzifruits.com",
    footerLabel: "Read more...",

    image: GidaLogo,
    title: "Founding director (part time)",
    brief: "Gida Fruits India Pvt. Ltd.",
    startDate: new Date("1 June 2018"),
    endDate: new Date("31 March 2021"),
    skillIds: ["js", "html", "css", "nodejs", "postgresql"],
    highlights: <GidaHighlights />,
};

function GidaHighlights() {
    return (
        <div style={{ padding: "8px" }}>
            <div>Launched & marketed a fruit-bowl subscription service:</div>
            <ul>
                <li>Developed the front-end for the e-commerce site</li>
                <li>Led iOS & Android teams for the Gida App</li>
                <li>Ran marketing, customer service till 1000 paid users</li>
            </ul>
            <div style={{ display: "flex" }}>
                <Location locationLabel="Bengaluru 🇮🇳" />
                <Location locationLabel="Schenzhen 🇨🇳" />
                <Location locationLabel="Boston 🇺🇸" />
                <Commute commuteType="remote" />
                <Commute commuteType="hybrid" />
                <Commute commuteType="onsite" />
            </div>
        </div>
    );
}

export default GidaHighlights;
