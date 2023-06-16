import styles from "./gallery.module.scss";
import SlideImage from "../SlideImage";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import SlideVideo from "../SlideVideo";

function Gallery(props) {
    const { gallerySlides } = props;
    const renderedSlides = gallerySlides.map((slide, index) => {
        if (slide.type === "video") {
            return (
                <SlideVideo
                    key={slide.id}
                    youtubeUrl={slide.youtubeUrl}
                    aspectRatio={slide.aspectRatio || 1}
                />
            );
        } else {
            return (
                <SlideImage
                    key={slide.id}
                    alt={slide.imageSrc || "slide image " + index}
                    imagesrc={slide.imageSrc}
                    bgimagesrc={slide.bgImageSrc}
                />
            );
        }
    });
    return (
        <div className={styles["container"]}>
            <div className={styles["scroll-container"]}>
                <div className={styles["slide-container"]}>
                    {renderedSlides}
                </div>
            </div>
            <div className={styles["navigation"]}>
                <BsFillArrowLeftCircleFill className={styles["nav-icon"]} />
                <BsFillArrowRightCircleFill className={styles["nav-icon"]} />
            </div>
        </div>
    );
}

export default Gallery;
