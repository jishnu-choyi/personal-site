import styles from "./slideVideo.module.scss";

function SlideVideo(props) {
    const { youtubeUrl, aspectRatio, height, style } = props;
    const defaultHeight = 192;
    const width = (height || defaultHeight) * (aspectRatio || 16 / 9);
    return (
        <div className={styles.container} style={style}>
            <iframe
                width={width}
                height={height || defaultHeight}
                src={`https://www.youtube-nocookie.com/embed/${youtubeUrl}?controls=0`}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}
export default SlideVideo;
