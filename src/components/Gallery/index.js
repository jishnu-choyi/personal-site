import styles from "./gallery.module.scss";
import SlideImage from "../SlideImage";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import SlideVideo from "../SlideVideo";
import { useEffect, useRef, useState } from "react";

function Gallery(props) {
    const { gallerySlides } = props;

    const [scrollLeftActive, setScrollLeftActive] = useState(false);
    const [scrollRightActive, setScrollRightActive] = useState(false);

    const galleryScrollRef = useRef();
    const updateScroll = () => {
        const scrollEl = galleryScrollRef.current;
        if (!scrollEl) return;
        setScrollLeftActive(scrollEl.scrollLeft !== 0);
        setScrollRightActive(
            scrollEl.clientWidth + scrollEl.scrollLeft < scrollEl.scrollWidth
        );
    };
    const handleLeftClick = (event) => {
        galleryScrollRef.current.scrollLeft -= 200;
    };
    const handleRightClick = (event) => {
        galleryScrollRef.current.scrollLeft += 200;
    };

    useEffect(() => {
        updateScroll();
    });

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
            <div
                className={styles["scroll-container"]}
                ref={galleryScrollRef}
                onScroll={updateScroll}
            >
                <div className={styles["slide-container"]}>
                    {renderedSlides}
                </div>
            </div>
            <div className={styles["navigation"]}>
                <BsFillArrowLeftCircleFill
                    className={
                        styles["nav-icon"] +
                        " " +
                        (scrollLeftActive ? "" : styles["inactive"])
                    }
                    onClick={handleLeftClick}
                />
                <BsFillArrowRightCircleFill
                    className={
                        styles["nav-icon"] +
                        " " +
                        (scrollRightActive ? "" : styles["inactive"])
                    }
                    onClick={handleRightClick}
                />
            </div>
        </div>
    );
}

export default Gallery;
