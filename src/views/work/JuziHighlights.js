import styles from "./juzi-highlights.module.scss";
import React from "react";
import GalleryWithModal from "../../components/GalleryWithModal";

import JuziLogo from "../../assets/images/logos_webp/juzi/logo_full2_64.webp";
import JuziLanding from "../../assets/images/showcase/juzi_webp/1-landing.webp";
import JuziLanding_MR from "../../assets/images/showcase/juzi_webp/1-landing_mr.webp";
import JuziLanding_LR from "../../assets/images/showcase/juzi_webp/1-landing_lr.webp";

import JuziBowls from "../../assets/images/showcase/juzi_webp/2-bowls.webp";
import JuziBowls_MR from "../../assets/images/showcase/juzi_webp/2-bowls_mr.webp";
import JuziBowls_LR from "../../assets/images/showcase/juzi_webp/2-bowls_lr.webp";

import JuziLogin from "../../assets/images/showcase/juzi_webp/8-login.webp";
import JuziLogin_MR from "../../assets/images/showcase/juzi_webp/8-login_mr.webp";
import JuziLogin_LR from "../../assets/images/showcase/juzi_webp/8-login_lr.webp";

import JuziCorporate from "../../assets/images/showcase/juzi_webp/4-corporate.webp";
import JuziCorporate_MR from "../../assets/images/showcase/juzi_webp/4-corporate_mr.webp";
import JuziCorporate_LR from "../../assets/images/showcase/juzi_webp/4-corporate_lr.webp";

import JuziSupport from "../../assets/images/showcase/juzi_webp/5-support.webp";
import JuziSupport_MR from "../../assets/images/showcase/juzi_webp/5-support_mr.webp";
import JuziSupport_LR from "../../assets/images/showcase/juzi_webp/5-support_lr.webp";

import JuziAndroid from "../../assets/images/showcase/juzi_webp/6-android.webp";
import JuziAndroid_MR from "../../assets/images/showcase/juzi_webp/6-android_mr.webp";
import JuziAndroid_LR from "../../assets/images/showcase/juzi_webp/6-android_lr.webp";

import JuziIos from "../../assets/images/showcase/juzi_webp/7-ios.webp";
import JuziIos_MR from "../../assets/images/showcase/juzi_webp/7-ios_mr.webp";
import JuziIos_LR from "../../assets/images/showcase/juzi_webp/7-ios_lr.webp";

export const juziData = {
    id: "juzi",
    itemType: "work-exp",
    productType: "software",
    commuteType: "hybrid",

    headerLabel: "Work > B2C e-commerce",
    url: "https://juzifruits.com",
    urlLabel: "juzifruits.com",
    //footerLabel: "Read more...",

    image: JuziLogo,
    title: "Founding Director (part time)",
    brief: "Juzi Fruits India Pvt. Ltd., Bengaluru",
    startDate: new Date("1 April 2019"),
    endDate: new Date("31 March 2021"),
    skillIds: ["js", "html", "css", "nodejs", "postgresql"],
    highlights: <JuziHighlights />,
};

function JuziHighlights() {
    return (
        <div className={styles["juzi-container"]}>
            <div className={styles["row1"]}>
                <ul>
                    <li>
                        Helped launch & market a fruit-bowl subscription service
                        in Bangalore
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
                            imageSrc: JuziLanding,
                            imageSrc_MR: JuziLanding_MR,
                            bgImageSrc: JuziLanding_LR,
                            alt: "Landing page",
                            linkUrl: "https://juzifruits.com",
                        },
                        {
                            type: "slide",
                            id: "2",
                            imageSrc: JuziBowls,
                            imageSrc_MR: JuziBowls_MR,
                            bgImageSrc: JuziBowls_LR,
                            alt: "Fruit bowls",
                        },
                        {
                            type: "slide",
                            id: "3",
                            imageSrc: JuziLogin,
                            imageSrc_MR: JuziLogin_MR,
                            bgImageSrc: JuziLogin_LR,
                            alt: "Login page",
                        },
                        {
                            type: "slide",
                            id: "3a",
                            imageSrc: JuziCorporate,
                            imageSrc_MR: JuziCorporate_MR,
                            bgImageSrc: JuziCorporate_LR,
                            alt: "Corporate",
                        },

                        {
                            type: "slide",
                            id: "4",
                            imageSrc: JuziSupport,
                            imageSrc_MR: JuziSupport_MR,
                            bgImageSrc: JuziSupport_LR,
                            alt: "Support",
                        },
                        {
                            type: "slide",
                            id: "5",
                            imageSrc: JuziAndroid,
                            imageSrc_MR: JuziAndroid_MR,
                            bgImageSrc: JuziAndroid_LR,
                            alt: "Android App",
                        },
                        {
                            type: "slide",
                            id: "6",
                            imageSrc: JuziIos,
                            imageSrc_MR: JuziIos_MR,
                            bgImageSrc: JuziIos_LR,
                            alt: "IOS App",
                        },
                    ]}
                />
                <GalleryWithModal
                    containerClassName={styles["gallery-container-2"]}
                    gallerySlides={[
                        {
                            type: "video",
                            id: "mats-trailer",
                            youtubeUrl: "k-yfb0uGyrY",
                            aspectRatio: 16 / 9,
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default JuziHighlights;
