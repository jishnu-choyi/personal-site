import GidaLogo from "../../assets/images/logos/gida/logo.png";
import YokyLogo from "../../assets/images/logos/yoky/logo_black-full.png";
import GtsLogo from "../../assets/images/logos/gts/logo.642f4f3c.png";
import IITMLogo from "../../assets/images/logos/iitm/IIT_Madras_Logo.svg.png";
import NusLogo from "../../assets/images/logos/nus/nus_logo_full-horizontal.jpeg";
import EnseaLogo from "../../assets/images/logos/ensea/Cergy-Pontoise_University_(logo).svg.png";

import SlatedHighlights, { slatedData } from "./SlatedHighlights";
import { juziData } from "./JuziHighlights";
import { adiData, adiTravelData } from "./AdiHighlights";

const showCases = [
    slatedData,
    juziData,
    adiData,
    adiTravelData,

    {
        id: "gida-softwareservices",
        url: "https://gida.in",
        image: GidaLogo,
        title: "Technical Co-founder",
        brief: "Slated Technologies Inc, Dover, DE 19901",
        startDate: new Date("1 April 2021"),
        endDate: new Date("1 April 2023"),
        skillIds: ["js", "ts", "angular", "react"],
        highlights: <SlatedHighlights />,
    },
    {
        id: "gida-yoky",
        url: "https://yoky.io",
        image: YokyLogo,
        title: "Technical Co-founder",
        brief: "Slated Technologies Inc, Dover, DE 19901",
        startDate: new Date("1 April 2021"),
        endDate: new Date("1 April 2023"),
        skillIds: ["js", "ts", "angular", "react"],
        highlights: <SlatedHighlights />,
    },
    {
        id: "gts",
        url: "https://goingtoschool.com",
        image: GtsLogo,
        title: "Technical Co-founder",
        brief: "Slated Technologies Inc, Dover, DE 19901",
        startDate: new Date("1 April 2021"),
        endDate: new Date("1 April 2023"),
        skillIds: ["js", "ts", "angular", "react"],
        highlights: <SlatedHighlights />,
    },
];

export default showCases;
