import styles from "./games-highlights.module.scss";
import GalleryWithModal from "../../components/GalleryWithModal";
import Link from "../../components/Link";

import GtsLogo from "../../assets/images/logos_webp/gts/logo_64.webp";
import GoogleImpactLogo from "../../assets/images/logos_webp/gts/Google-Global-Impact-Award.webp";
import GoogleImpactLogo_MR from "../../assets/images/logos_webp/gts/Google-Global-Impact-Award_mr.webp";
import GoogleImpactLogo_LR from "../../assets/images/logos_webp/gts/Google-Global-Impact-Award.webp";
import GoogleLogo from "../../assets/images/logos_webp/gts/googlelogo_color_272x92dp.webp";

import PlayingImage from "../../assets/images/showcase/games_webp/playing.webp";
import PlayingImage_MR from "../../assets/images/showcase/games_webp/playing_mr.webp";
import PlayingImage_LR from "../../assets/images/showcase/games_webp/playing_lr.webp";

import PlayingImage2 from "../../assets/images/showcase/games_webp/impact-report.webp";
import PlayingImage2_MR from "../../assets/images/showcase/games_webp/impact-report_mr.webp";
import PlayingImage2_LR from "../../assets/images/showcase/games_webp/impact-report_lr.webp";

import MatsPoster from "../../assets/images/showcase/games_webp/mats.webp";
import MatsPoster_MR from "../../assets/images/showcase/games_webp/mats_mr.webp";
import MatsPoster_LR from "../../assets/images/showcase/games_webp/mats_lr.webp";

import MatnPoster from "../../assets/images/showcase/games_webp/matn.webp";
import MatnPoster_MR from "../../assets/images/showcase/games_webp/matn_mr.webp";
import MatnPoster_LR from "../../assets/images/showcase/games_webp/matn_lr.webp";

import MatjPoster from "../../assets/images/showcase/games_webp/matj-report.webp";
import MatjPoster_MR from "../../assets/images/showcase/games_webp/matj-report_mr.webp";
import MatjPoster_LR from "../../assets/images/showcase/games_webp/matj-report_lr.webp";

import MatbPoster from "../../assets/images/showcase/games_webp/matb-report.webp";
import MatbPoster_MR from "../../assets/images/showcase/games_webp/matb-report_mr.webp";
import MatbPoster_LR from "../../assets/images/showcase/games_webp/matb-report_lr.webp";

import MatrPoster from "../../assets/images/showcase/games_webp/matr.webp";
import MatrPoster_MR from "../../assets/images/showcase/games_webp/matr_mr.webp";
import MatrPoster_LR from "../../assets/images/showcase/games_webp/matr_lr.webp";

import MatoPoster from "../../assets/images/showcase/games_webp/mato.webp";
import MatoPoster_MR from "../../assets/images/showcase/games_webp/mato_mr.webp";
import MatoPoster_LR from "../../assets/images/showcase/games_webp/mato_lr.webp";

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
