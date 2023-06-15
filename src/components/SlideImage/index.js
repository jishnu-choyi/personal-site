import { useState } from "react";
import styles from "./slideImage.module.scss";
import ProgressBar from "../ProgressBar";

function SlideImage(props) {
    const { imagesrc, bgimagesrc, alt } = props;
    const [loaded, setLoaded] = useState(false);

    const handleLoad = (event) => {
        console.log("handle load=", event, event.loaded, event.total);
        setLoaded(true);
    };
    return (
        <div
            className={styles.container}
            {...props}
            style={{ width: "100px", height: "200px", background: "black" }}
        >
            {!!loaded && (
                <>
                    <ProgressBar className={styles.progress} />
                    <img
                        className={styles["bg-img"]}
                        src={bgimagesrc}
                        alt={alt}
                    />
                </>
            )}
            <img
                className={styles["main-img"]}
                onLoad={handleLoad}
                src={imagesrc}
                alt={alt}
            />
        </div>
    );
}
export default SlideImage;
