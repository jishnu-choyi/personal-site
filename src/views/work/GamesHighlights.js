import styles from "./games-highlights.module.scss";
import GtsLogo from "../../assets/images/logos/gts/logo.642f4f3c.png";

import GoogleImpactLogo from "../../assets/images/logos/gts/Google-Global-Impact-Award.png";
import GoogleImpactLogo_MR from "../../assets/images/logos/gts/Google-Global-Impact-Award_mr.png";
import GoogleImpactLogo_LR from "../../assets/images/logos/gts/Google-Global-Impact-Award.png";

import GoogleLogo from "../../assets/images/logos/gts/googlelogo_color_272x92dp.png";
import GalleryWithModal from "../../components/GalleryWithModal";
import Link from "../../components/Link";

import PlayingImage from "../../assets/images/showcase/games/playing.jpg";
import PlayingImage_MR from "../../assets/images/showcase/games/playing_mr.jpg";
import PlayingImage_LR from "../../assets/images/showcase/games/playing_lr.png";

import PlayingImage2 from "../../assets/images/showcase/games/impact-report.png";
import PlayingImage2_MR from "../../assets/images/showcase/games/impact-report_mr.png";
import PlayingImage2_LR from "../../assets/images/showcase/games/impact-report_lr.png";

import MatsPoster from "../../assets/images/showcase/games/mats.jpg";
import MatsPoster_MR from "../../assets/images/showcase/games/mats_mr.jpg";
import MatsPoster_LR from "../../assets/images/showcase/games/mats_lr.png";

import MatnPoster from "../../assets/images/showcase/games/matn.jpg";
import MatnPoster_MR from "../../assets/images/showcase/games/matn_mr.jpg";
import MatnPoster_LR from "../../assets/images/showcase/games/matn_lr.png";

import MatjPoster from "../../assets/images/showcase/games/matj-report.jpg";
import MatjPoster_MR from "../../assets/images/showcase/games/matj-report_mr.jpg";
import MatjPoster_LR from "../../assets/images/showcase/games/matj-report_lr.png";

import MatbPoster from "../../assets/images/showcase/games/matb-report.png";
import MatbPoster_MR from "../../assets/images/showcase/games/matb-report_mr.png";
import MatbPoster_LR from "../../assets/images/showcase/games/matb-report_lr.png";

import MatrPoster from "../../assets/images/showcase/games/matr.jpg";
import MatrPoster_MR from "../../assets/images/showcase/games/matr_mr.jpg";
import MatrPoster_LR from "../../assets/images/showcase/games/matr_lr.png";

import MatoPoster from "../../assets/images/showcase/games/mato.jpg";
import MatoPoster_MR from "../../assets/images/showcase/games/mato_mr.jpg";
import MatoPoster_LR from "../../assets/images/showcase/games/mato_lr.png";

export const gamesTravelData = {
    id: "games-travel",
    itemType: "travel",
    commuteType: "onsite",

    headerLabel: "Travel for work",
    highlights: <GamesTravelHighlights />,
    locations: [
        { id: "bihar", label: "Bihar   🇮🇳" },
        { id: "jharkhand", label: "Jharkhand  🇮🇳" },
        { id: "chattisgarh", label: "Chattisgarh  🇮🇳" },
    ],
    skillIds: ["teacherTraining", "fieldTest"],
};
function GamesTravelHighlights() {
    return (
        <div className={styles["games-travel-container"]}>
            <div className={styles["col1"]}>
                <ul>
                    <li>
                        Visited more than{" "}
                        <b>10 schools in Patna, Nalanda & Ranchi & Raipur</b>{" "}
                        (Bihar, Jharkhand & Chattisgarh)
                    </li>
                    <li>
                        <b>Trained high school teachers</b> and incorporated
                        changes to the games based on the conditions in which
                        these games are played
                    </li>
                </ul>
            </div>
        </div>
    );
}

export const gamesData = {
    id: "games",
    itemType: "work-exp",
    productType: "hardware",
    commuteType: "onsite",

    headerLabel: "Work > Game development",
    url: "https://impactchallenge.withgoogle.com/india2013/charities/gts",
    urlLabel: "Going to school fund",
    // footerLabel: "Read more...",

    image: GtsLogo,
    title: "Lead Game Developer",
    brief: "Going To School, Gida Technologies & Google",
    startDate: new Date("1 April 2013"),
    endDate: new Date("31 May 2015"),
    skillIds: [
        "threejs",
        "glsl",
        "blender",
        "html",
        "css",
        "js",
        "nodejs",
        "postgresql",
    ],
    highlights: <GameHighlights />,
};

function GameHighlights() {
    return (
        <div className={styles["games-container"]}>
            <div className={styles["row1"]}>
                <div className={styles["award-container"]}>
                    <img
                        className={styles["award-logo"]}
                        src={GoogleImpactLogo}
                        alt="google impact awards"
                    />
                    <img
                        className={styles["google-logo"]}
                        src={GoogleLogo}
                        alt="google logo"
                    />
                </div>
                <div className={styles["content"]}>
                    <ul>
                        <li>
                            Part of the{" "}
                            <Link
                                urlLabel="winning team"
                                url="https://impactchallenge.withgoogle.com/india2013"
                            />{" "}
                            for <b>₹1.5crore (~250k USD)</b> funding from Google{" "}
                        </li>
                        <li>
                            <b>Developed five 3D Games</b> to be played by
                            children in the Govt. schools of Bihar, Jharkhand &
                            Chattisgarh
                        </li>
                        <li>
                            <b>Impact:</b> {">"}7000 students in 9th & 10th
                            played educational games on iPads & Android tablets
                            for the first time
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles["row2"]}>
                <GalleryWithModal
                    style={{ width: "100%", height: "256px" }}
                    gallerySlides={[
                        {
                            type: "video",
                            id: "mats-trailer",
                            youtubeUrl: "BCLmroRsuFk",
                            aspectRatio: 16 / 9,
                        },
                        {
                            type: "slide",
                            id: "3",
                            imageSrc: PlayingImage,
                            imageSrc_MR: PlayingImage_MR,
                            bgImageSrc: PlayingImage_LR,
                            alt: "Gaming for change (Source: Going to school Annual report 2015)",
                            linkUrl: "kpTWzOC9oSI",
                        },
                        {
                            type: "slide",
                            id: "playing-image",
                            imageSrc: PlayingImage2,
                            imageSrc_MR: PlayingImage2_MR,
                            bgImageSrc: PlayingImage2_LR,
                            alt: "Gaming for change (Source: Going to school Annual report 2015)",
                            linkUrl: "kpTWzOC9oSI",
                        },
                        {
                            type: "video",
                            id: "matn-trailer",
                            youtubeUrl: "tCh6kLZVj8E",
                            aspectRatio: 16 / 9,
                        },
                        {
                            type: "slide",
                            id: "mats_poster",
                            imageSrc: MatsPoster,
                            imageSrc_MR: MatsPoster_MR,
                            bgImageSrc: MatsPoster_LR,
                            alt: "Educational game to teach Time management",
                        },
                        {
                            type: "slide",
                            id: "matn_poster",
                            imageSrc: MatnPoster,
                            imageSrc_MR: MatnPoster_MR,
                            bgImageSrc: MatnPoster_LR,
                            alt: "Educational game on problem solving",
                        },
                        {
                            type: "slide",
                            id: "matb_poster",
                            imageSrc: MatbPoster,
                            imageSrc_MR: MatbPoster_MR,
                            bgImageSrc: MatbPoster_LR,
                            alt: "Educational game on team management",
                        },
                        {
                            type: "slide",
                            id: "matj_poster",
                            imageSrc: MatjPoster,
                            imageSrc_MR: MatjPoster_MR,
                            bgImageSrc: MatjPoster_LR,
                            alt: "Educational game on running a business",
                        },
                        {
                            type: "slide",
                            id: "matr_poster",
                            imageSrc: MatrPoster,
                            imageSrc_MR: MatrPoster_MR,
                            bgImageSrc: MatrPoster_LR,
                            alt: "Educational game on finance",
                        },
                        {
                            type: "slide",
                            id: "mato_poster",
                            imageSrc: MatoPoster,
                            imageSrc_MR: MatoPoster_MR,
                            bgImageSrc: MatoPoster_LR,
                            alt: "Educational game on enviromentalism",
                        },
                        {
                            type: "slide",
                            id: "impact-challenge",
                            imageSrc: GoogleImpactLogo,
                            imageSrc_MR: GoogleImpactLogo_MR,
                            bgImageSrc: GoogleImpactLogo_LR,
                            alt: "Google Impact Challenge 2013 Winners",
                            linkUrl:
                                "https://impactchallenge.withgoogle.com/india2013",
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default GameHighlights;
