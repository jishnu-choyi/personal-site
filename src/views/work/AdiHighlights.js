import React from "react";
import AdiLogo from "../../assets/images/logos/adi/Analog_Devices_Logo-full.png";

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

export default AdiHighlights;
