import GidaLogo from "../../assets/images/logos/gida/logo.png";
import YokyLogo from "../../assets/images/logos/yoky/logo_black-full.png";
import GtsLogo from "../../assets/images/logos/gts/logo.642f4f3c.png";

import SlatedHighlights, { slatedData } from "./SlatedHighlights";
import { juziData } from "./JuziHighlights";
import { gidaData } from "./GidaHighlights";
import { gamesData, gamesTravelData } from "./GamesHighlights";
import { yokyData, yokyTravelData } from "./YokyHighlights";
import { scrappyData, scrappyTravelData } from "./ScrappyHighlights";
import { creativeData } from "./CreativeHighlights";

import { adiData, adiTravelData } from "./AdiHighlights";
import { iitmData } from "./IITMHighlights";
import { nusData } from "./NUSHighlights";
import { enseaData } from "./EnseaHighlights";

const showCases = [
    slatedData,
    juziData,

    gidaData,

    gamesData,
    gamesTravelData, //Bihar, Jharkhand, Chattisgarh

    yokyData,
    yokyTravelData, //China

    scrappyData,
    scrappyTravelData, //Mumbai, Bhagalpur

    creativeData, //BnB, Fluid animatiom, Product video

    adiData,
    adiTravelData,

    iitmData,
    nusData,
    enseaData,
];

export default showCases;
