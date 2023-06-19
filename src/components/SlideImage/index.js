import { useState } from "react";
import styles from "./slideImage.module.scss";
import ProgressBar from "../ProgressBar";
import Link from "../Link";

function SlideImage(props) {
    const { imagesrc, bgimagesrc, alt, linkUrl, ...rest } = props;
    const [loaded, setLoaded] = useState(false);
    const [showCaption, setShowCaption] = useState(false);

    return (
        <div
            className={styles.container}
            {...rest}
            onMouseEnter={() => setShowCaption(true)}
            onMouseLeave={() => setShowCaption(false)}
        >
            {!loaded && (
                <>
                    <ProgressBar
                        className={styles.progress}
                        displayType="rotate"
                    />
                    <img
                        className={styles["bg-img"]}
                        src={bgimagesrc}
                        alt={alt}
                    />
                </>
            )}
            <div className={styles["figure-con"]}>
                <img
                    className={styles["main-img"]}
                    onLoad={() => setLoaded(true)}
                    src={imagesrc}
                    alt={alt}
                />
                {showCaption && alt && (
                    <div className={styles["caption"]}>
                        {linkUrl ? (
                            <Link
                                urlLabel={alt}
                                url={linkUrl}
                                style={{ color: "white" }}
                            />
                        ) : (
                            alt
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
export default SlideImage;
