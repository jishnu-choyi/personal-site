import styles from "./juzi-highlights.module.scss";
import React from "react";
import JuziLogo from "../../assets/images/logos/juzi/logo_full2.png";
import GalleryWithModal from "../../components/GalleryWithModal";

import JuziLanding from "../../assets/images/showcase/juzi/1-landing.jpg";
import JuziLanding_LR from "../../assets/images/showcase/juzi/1-landing_lr.png";
import JuziBowls from "../../assets/images/showcase/juzi/2-bowls.jpg";
import JuziBowls_LR from "../../assets/images/showcase/juzi/2-bowls_lr.png";
import JuziLogin from "../../assets/images/showcase/juzi/8-login.jpg";
import JuziLogin_LR from "../../assets/images/showcase/juzi/8-login_lr.png";

import JuziCorporate from "../../assets/images/showcase/juzi/4-corporate.jpg";
import JuziCorporate_LR from "../../assets/images/showcase/juzi/4-corporate_lr.png";

import JuziSupport from "../../assets/images/showcase/juzi/5-support.jpg";
import JuziSupport_LR from "../../assets/images/showcase/juzi/5-support_lr.png";
import JuziAndroid from "../../assets/images/showcase/juzi/6-android.jpg";
import JuziAndroid_LR from "../../assets/images/showcase/juzi/6-android_lr.png";
import JuziIos from "../../assets/images/showcase/juzi/7-ios.jpg";
import JuziIos_LR from "../../assets/images/showcase/juzi/7-ios_lr.png";

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
                            bgImageSrc: JuziLanding_LR,
                            alt: "Landing page",
                            linkUrl: "https://juzifruits.com",
                        },
                        {
                            type: "slide",
                            id: "2",
                            imageSrc: JuziBowls,
                            bgImageSrc: JuziBowls_LR,
                            alt: "Fruit bowls",
                        },
                        {
                            type: "slide",
                            id: "3",
                            imageSrc: JuziLogin,
                            bgImageSrc: JuziLogin_LR,
                            alt: "Login page",
                        },
                        {
                            type: "slide",
                            id: "3a",
                            imageSrc: JuziCorporate,
                            bgImageSrc: JuziCorporate_LR,
                            alt: "Corporate",
                        },

                        {
                            type: "slide",
                            id: "4",
                            imageSrc: JuziSupport,
                            bgImageSrc: JuziSupport_LR,
                            alt: "Support",
                        },
                        {
                            type: "slide",
                            id: "5",
                            imageSrc: JuziAndroid,
                            bgImageSrc: JuziAndroid_LR,
                            alt: "Android App",
                        },
                        {
                            type: "slide",
                            id: "6",
                            imageSrc: JuziIos,
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
