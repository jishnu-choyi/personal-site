import styles from "./yoky-highlights.module.scss";
import YokyLogo from "../../assets/images/logos_webp/yoky/logo_black-full.webp";
import Link from "../../components/Link";
import GalleryWithModal from "../../components/GalleryWithModal";

import yokyTagData from "./yoky-tag-data";
import yokyGloData from "./yoky-glo-data";
import yokyRedData from "./yoky-red-data";

export const yokyTravelData = {
    id: "yoky-travel",
    itemType: "travel",
    commuteType: "onsite",

    headerLabel: "Travel for work",
    highlights: <YokyTravelHighlights />,
    locations: [
        { id: "schenzhen", label: "Shenzhen, China  🇨🇳" },
        { id: "delhi", label: "New Delhi, IN 🇮🇳" },
        { id: "Ganghuaxing", label: "Ganghuaxing Industrial Zone  🇨🇳" },
    ],
    skillIds: ["compliance", "certifications"],
};
function YokyTravelHighlights() {
    return (
        <div className={styles["yoky-travel-container"]}>
            <div className={styles["col1"]}>
                <ul>
                    <li>
                        Single point of contact for wireless labs in Shenzhen
                        and New Delhi
                    </li>
                    <li>
                        Supervised the wireless certification tests and made
                        sure that the products will pass the tests and therefore
                        be <b>ready for manufacturing</b>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export const yokyData = {
    id: "yoky",
    itemType: "work-exp",
    productType: "hardware",

    headerLabel: "Work > B2C Hardware",
    url: "https://yoky.io/",
    urlLabel: "yoky.io",

    image: YokyLogo,
    title: "Head of Product Development",
    brief: "Gida Technologies India Pvt. Ltd., Bengaluru",
    startDate: new Date("1 June 2015"),
    endDate: new Date("31 May 2019"),
    skillIds: [
        "firmwareC",
        "js",
        "threejs",
        "html",
        "css",
        "nodejs",
        "solidworks",
        "blender",
        "productDesign",
    ],
    highlights: <YokyHighlights />,
};

function YokyHighlights() {
    return (
        <div className={styles["yoky-container"]}>
            <div className={styles["row1"]}>
                <ul>
                    <li>
                        Led the development and launch of bluetooth based object
                        tracker & pedometer Yoky Tag
                    </li>
                    <li>
                        <b>Livemint review</b> of the product:{" "}
                        <Link
                            urlLabel="Yoky Tag review: For finding misplaced keys and more | Mint"
                            url="https://www.livemint.com/Leisure/oO9albNSGCcT3RZxBCxgSO/Yoky-Tag-review-For-finding-misplaced-keys-and-more.html"
                        />
                    </li>
                    <li>
                        Led the development of bluetooth based{" "}
                        <b>
                            Smart bulb:{" "}
                            <Link
                                urlLabel="Yoky Glo"
                                url="https://yoky.io/glo/#home"
                            />
                        </b>{" "}
                        and{" "}
                        <b>
                            Smart remote:{" "}
                            <Link
                                urlLabel="Yoky Red"
                                url="https://yoky.io/red/#home"
                            />
                        </b>
                    </li>
                </ul>
            </div>
            <div className={styles["row2"]}>
                <GalleryWithModal
                    containerClassName={styles["gallery-container"]}
                    gallerySlides={yokyTagData}
                />
                <GalleryWithModal
                    containerClassName={styles["gallery-container"]}
                    gallerySlides={yokyGloData}
                />
                <GalleryWithModal
                    containerClassName={styles["gallery-container"]}
                    gallerySlides={yokyRedData}
                />
            </div>
        </div>
    );
}

export default YokyHighlights;
