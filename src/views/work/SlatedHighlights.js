import styles from "./slated-highlights.module.scss";
import React from "react";
import SlatedLogo from "../../assets/images/logos/slated/slated-full-logo.png";
import GalleryWithModal from "../../components/GalleryWithModal";

import SlatedLanding from "../../assets/images/showcase/slated/landing.png";
import SlatedLanding_MR from "../../assets/images/showcase/slated/landing_mr.png";
import SlatedLanding_LR from "../../assets/images/showcase/slated/landing_lr.png";

import SlatedCalendar from "../../assets/images/showcase/slated/calendar.png";
import SlatedCalendar_MR from "../../assets/images/showcase/slated/calendar_mr.png";
import SlatedCalendar_LR from "../../assets/images/showcase/slated/calendar_lr.png";

import SlatedLogin from "../../assets/images/showcase/slated/login.png";
import SlatedLogin_MR from "../../assets/images/showcase/slated/login_mr.png";
import SlatedLogin_LR from "../../assets/images/showcase/slated/login_lr.png";

import SlatedHome from "../../assets/images/showcase/slated/home.png";
import SlatedHome_MR from "../../assets/images/showcase/slated/home_mr.png";
import SlatedHome_LR from "../../assets/images/showcase/slated/home_lr.png";

import SlatedPreferences from "../../assets/images/showcase/slated/preferences.png";
import SlatedPreferences_MR from "../../assets/images/showcase/slated/preferences_mr.png";
import SlatedPreferences_LR from "../../assets/images/showcase/slated/preferences_lr.png";

import SlatedAvailability from "../../assets/images/showcase/slated/availability.png";
import SlatedAvailability_MR from "../../assets/images/showcase/slated/availability_mr.png";
import SlatedAvailability_LR from "../../assets/images/showcase/slated/availability_lr.png";

import SlatedCreateLink from "../../assets/images/showcase/slated/createLink.png";
import SlatedCreateLink_MR from "../../assets/images/showcase/slated/createLink_mr.png";
import SlatedCreateLink_LR from "../../assets/images/showcase/slated/createLink_lr.png";

import SlatedLink from "../../assets/images/showcase/slated/link.png";
import SlatedLink_MR from "../../assets/images/showcase/slated/link_mr.png";
import SlatedLink_LR from "../../assets/images/showcase/slated/link_lr.png";

export const slatedData = {
    id: "slated",
    itemType: "work-exp",
    productType: "software",
    commuteType: "remote",

    headerLabel: "Work > B2C SaaS software",
    url: "https://slated.ai",
    urlLabel: "slated.ai",
    // footerLabel: "Read more...",

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
        "automatedTesting",
        "nvidiaRiva",
        "devOps",
        "jira",
        "docker",
        "kubernetes",
        "mlOps",
        "responsiveWeb",
        "ml",
        "speechToText",
    ],
    highlights: <SlatedHighlights />,
};

function SlatedHighlights() {
    return (
        <div className={styles["slated-container"]}>
            <div className={styles["row1"]}>
                <ul>
                    <li>
                        Led the product development team from ideation to MVP
                        launch
                    </li>
                    <li>
                        Angel funded (<b>$120k</b>)
                    </li>
                </ul>
            </div>
            <div className={styles["row2"]}>
                <GalleryWithModal
                    containerClassName={styles["gallery-container-1"]}
                    gallerySlides={[
                        {
                            type: "slide",
                            id: "1",
                            imageSrc: SlatedLanding,
                            imageSrc_MR: SlatedLanding_MR,
                            bgImageSrc: SlatedLanding_LR,
                            alt: "Landing page",
                            linkUrl: "https://slated.ai",
                        },
                        {
                            type: "slide",
                            id: "2",
                            imageSrc: SlatedCalendar,
                            imageSrc_MR: SlatedCalendar_MR,
                            bgImageSrc: SlatedCalendar_LR,
                            alt: "Calendar",
                        },
                        {
                            type: "slide",
                            id: "3",
                            imageSrc: SlatedLogin,
                            imageSrc_MR: SlatedLogin_MR,
                            bgImageSrc: SlatedLogin_LR,
                            alt: "Login page",
                        },
                        {
                            type: "slide",
                            id: "4",
                            imageSrc: SlatedHome,
                            imageSrc_MR: SlatedHome_MR,
                            bgImageSrc: SlatedHome_LR,
                            alt: "Home",
                        },
                        {
                            type: "slide",
                            id: "5",
                            imageSrc: SlatedCreateLink,
                            imageSrc_MR: SlatedCreateLink_MR,
                            bgImageSrc: SlatedCreateLink_LR,
                            alt: "Create scheduling link",
                        },
                        {
                            type: "slide",
                            id: "6",
                            imageSrc: SlatedLink,
                            imageSrc_MR: SlatedLink_MR,
                            bgImageSrc: SlatedLink_LR,
                            alt: "Scheduling link",
                        },
                        {
                            type: "slide",
                            id: "7",
                            imageSrc: SlatedPreferences,
                            imageSrc_MR: SlatedPreferences_MR,
                            bgImageSrc: SlatedPreferences_LR,
                            alt: "Preferences",
                        },
                        {
                            type: "slide",
                            id: "8",
                            imageSrc: SlatedAvailability,
                            imageSrc_MR: SlatedAvailability_MR,
                            bgImageSrc: SlatedAvailability_LR,
                            alt: "Availability",
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default SlatedHighlights;
