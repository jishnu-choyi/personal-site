import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import ShowCase from "./components/ShowCase";
import showCases from "./views/work/work-data";
import * as amplitude from "@amplitude/analytics-browser";
import Travel from "./components/Travel";
import Education from "./components/Education";
import TestImageH from "./assets/images/test-image-horizontal.jpg";
import TestImageBgH from "./assets/images/test-image-horizontal-16.png";
import TestImageV from "./assets/images/test-image-vertical.jpg";
import TestImageBgV from "./assets/images/test-image-vertical-16.png";
import TestImageSq from "./assets/images/test-image-square.jpg";
import TestImageBgSq from "./assets/images/test-image-square-16.png";
import Gallery from "./components/Gallery";

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
    const renderedShowCases = showCases.map((data) => {
        if (data.itemType === "travel") {
            return <Travel key={data.id} showCaseData={data} />;
        } else if (data.itemType === "education") {
            return <Education key={data.id} showCaseData={data} />;
        } else if (data.itemType === "work-exp") {
            return <ShowCase key={data.id} showCaseData={data} />;
        }
    });

    const gallerySlides = [
        {
            type: "slide",
            id: "1",
            imageSrc: TestImageH,
            bgImageSrc: TestImageBgH,
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
                {/* <Landing /> */}
                {/* {renderedShowCases} */}
                <Gallery gallerySlides={gallerySlides} />
            </div>
        </ThemeProvider>
    );
}

export default App;
