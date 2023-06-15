import GidaLogo from "../../assets/images/logos/gida/logo.png";
import YokyLogo from "../../assets/images/logos/yoky/logo_black-full.png";
import GtsLogo from "../../assets/images/logos/gts/logo.642f4f3c.png";

import SlatedHighlights, { slatedData } from "./SlatedHighlights";
import { juziData } from "./JuziHighlights";
import { adiData, adiTravelData } from "./AdiHighlights";
import { iitmData } from "./IITMHighlights";
import { nusData } from "./NUSHighlights";
import { enseaData } from "./EnseaHighlights";

const showCases = [
    iitmData,
    nusData,
    enseaData,
    adiData,
    adiTravelData,
    slatedData,
    juziData,

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
