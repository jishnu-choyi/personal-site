import styles from "./gallery.module.scss";
import SlideImage from "../SlideImage";
import { BiExpand, BiCollapse } from "react-icons/bi";
import SlideVideo from "../SlideVideo";
import { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation";
import classNames from "classnames";
import ToolTipWrapper from "../ToolTipWrapper";

function Gallery(props) {
    const { gallerySlides, onExpand, onCollapse, style, className } = props;

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
        const scrollEl = galleryScrollRef.current;
        if (!scrollEl) return;
        scrollEl.scrollLeft -= Math.round(scrollEl.clientWidth * 1 - 4);
    };
    const handleRightClick = (event) => {
        const scrollEl = galleryScrollRef.current;
        if (!scrollEl) return;
        scrollEl.scrollLeft += Math.round(scrollEl.clientWidth * 1 - 4);
    };

    useEffect(() => {
        // console.log("useEffect", galleryScrollRef.current.clientHeight);
        updateScroll();
    });

    const renderedSlides = gallerySlides.map((slide, index) => {
        if (slide.type === "video") {
            return (
                <SlideVideo
                    key={slide.id}
                    youtubeUrl={slide.youtubeUrl}
                    aspectRatio={slide.aspectRatio || 1}
                    height={galleryScrollRef?.current?.clientHeight - 8}
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
                    linkUrl={slide.linkUrl}
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
            {gallerySlides.length > 1 && (
                <div className={styles["action"]}>
                    <Navigation
                        onPrev={handleLeftClick}
                        onNext={handleRightClick}
                        prevActive={scrollLeftActive}
                        nextActive={scrollRightActive}
                    />
                    {onExpand && (
                        <ToolTipWrapper
                            arrow
                            title="Expand this view"
                            className={styles["expand-icon"]}
                        >
                            <BiExpand onClick={onExpand} />
                        </ToolTipWrapper>
                    )}
                    {onCollapse && (
                        <ToolTipWrapper
                            arrow
                            title="Collapse this view"
                            className={styles["expand-icon"]}
                        >
                            <BiCollapse onClick={onCollapse} />
                        </ToolTipWrapper>
                    )}
                </div>
            )}
        </div>
    );
}

export default Gallery;
