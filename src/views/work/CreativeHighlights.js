import styles from "./creative-highlights.module.scss";
import JCLogo from "../../assets/images/logos/logo-orange-transparent.png";
import GalleryWithModal from "../../components/GalleryWithModal";
import BluedoorImage from "../../assets/images/showcase/creative/bluedoor.webp";
import BluedoorImage_LR from "../../assets/images/showcase/creative/bluedoor_lr.png";

export const creativeData = {
    id: "creative",
    itemType: "creative",
    productType: "software",

    headerLabel: `Not all those who wander are lost - J.R.R. Tolkien`,

    image: JCLogo,
    title: "Creative side projects",
    brief: "All side projects that was done during free time",
    skillIds: ["threejs", "glsl", "webgl", "blender", "affinityPhoto"],
    highlights: <CreativeHighlights />,
};

function CreativeHighlights() {
    return (
        <div className={styles["creative-container"]}>
            <div className={styles["row1"]}>
                <ul>
                    <li>A hill-top BnB (2022)</li>
                    <li>
                        Created a company website with fluid animations(2020)
                    </li>
                    <li>Programmatically created a product video</li>
                </ul>
            </div>
            <div className={styles["row2"]}>
                <GalleryWithModal
                    style={{ width: "100%", height: "200px" }}
                    gallerySlides={[
                        {
                            type: "slide",
                            id: "1",
                            imageSrc: BluedoorImage,
                            bgImageSrc: BluedoorImage_LR,
                            alt: "Blue door villa, Kerala",
                            linkUrl: "https://airbnb.co.in/h/thebluedoorvilla",
                        },
                        {
                            type: "video",
                            id: "2",
                            youtubeUrl: "aHBnWzXI4l0",
                            aspectRatio: 16 / 9,
                        },
                        {
                            type: "video",
                            id: "3",
                            youtubeUrl: "JIg5gayLbPc",
                            aspectRatio: 16 / 9,
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default CreativeHighlights;