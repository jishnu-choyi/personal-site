import { slatedData } from "./SlatedHighlights";
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

    yokyData,
    yokyTravelData, //China

    gamesData,
    gamesTravelData, //Bihar, Jharkhand, Chattisgarh

    scrappyData,
    scrappyTravelData, //Mumbai, Bhagalpur

    gidaData,

    adiData,
    adiTravelData,

    creativeData, //BnB, Fluid animatiom, Product video

    iitmData,
    nusData,
    enseaData,
];

export default showCases;
