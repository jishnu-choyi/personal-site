import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import * as amplitude from "@amplitude/analytics-browser";
import TestImageH from "./assets/images/test-image-horizontal.jpg";
import TestImageBgH from "./assets/images/test-image-horizontal-16.png";
import TestImageV from "./assets/images/test-image-vertical.jpg";
import TestImageBgV from "./assets/images/test-image-vertical-16.png";
import TestImageSq from "./assets/images/test-image-square.jpg";
import TestImageBgSq from "./assets/images/test-image-square-16.png";
import GalleryWithModal from "./components/GalleryWithModal";
import Content from "./pages/Content";

// Or Create your Own theme:
const iconTheme = createTheme({
    palette: {
        primary: {
            main: "#C47F38",
        },
        secondary: {
            main: "#EBDED4",
        },
    },
});

amplitude.init("71a74323057e3cdb289336830873113f", undefined, {
    defaultTracking: {
        sessions: true,
        pageViews: true,
        formInteractions: true,
        fileDownloads: true,
    },
});

function App() {
    // amplitude.track("Page view");

    const gallerySlides = [
        {
            type: "video",
            id: "4",
            youtubeUrl: "JIg5gayLbPc",
            aspectRatio: 16 / 9,
        },
        {
            type: "slide",
            id: "1",
            imageSrc: TestImageH,
            bgImageSrc: TestImageBgH,
            alt: "some alt caption",
        },
        {
            type: "slide",
            id: "2",
            imageSrc: TestImageV,
            bgImageSrc: TestImageBgV,
        },
        {
            type: "slide",
            id: "3",
            imageSrc: TestImageSq,
            bgImageSrc: TestImageBgSq,
        },
    ];

    return (
        <ThemeProvider theme={iconTheme}>
            <Header />
            <div className="container">
                <Landing />
                {/* <Content /> */}
            </div>
        </ThemeProvider>
    );
}

export default App;
