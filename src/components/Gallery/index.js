import styles from "./gallery.module.scss";
import SlideImage from "../SlideImage";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { BiExpand } from "react-icons/bi";
import SlideVideo from "../SlideVideo";
import { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation";
import classNames from "classnames";

function Gallery(props) {
    const { gallerySlides, onExpand, style, className } = props;

    const [scrollLeftActive, setScrollLeftActive] = useState(false);
    const [scrollRightActive, setScrollRightActive] = useState(false);

    const galleryScrollRef = useRef();
    const updateScroll = () => {
        const scrollEl = galleryScrollRef.current;
        if (!scrollEl) return;
        setScrollLeftActive(scrollEl.scrollLeft !== 0);
        setScrollRightActive(
            scrollEl.clientWidth + scrollEl.scrollLeft <= scrollEl.scrollWidth
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
                    alt={slide.alt}
                    imagesrc={slide.imageSrc}
                    bgimagesrc={slide.bgImageSrc}
                    caption={slide.caption}
                />
            );
        }
    });

    return (
        <div
            className={classNames(styles["container"], className)}
            style={style}
        >
            <div
                className={styles["scroll-container"]}
                ref={galleryScrollRef}
                onScroll={updateScroll}
            >
                <div className={styles["slide-container"]}>
                    {renderedSlides}
                </div>
            </div>
            <div className={styles["action"]}>
                <Navigation
                    onPrev={handleLeftClick}
                    onNext={handleRightClick}
                    prevActive={scrollLeftActive}
                    nextActive={scrollRightActive}
                />
                {onExpand && (
                    <BiExpand
                        onClick={onExpand}
                        className={styles["expand-icon"]}
                    />
                )}
            </div>
        </div>
    );
}

export default Gallery;
