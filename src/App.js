import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import * as amplitude from "@amplitude/analytics-browser";
import Content from "./pages/Content";
import EventBus from "./fluid/utils/EventBus";
import WebGL from "./fluid/modules/WebGL";
import Footer from "./components/Footer";
import { checkMobile } from "./utils/deviceUtils";

// Or Create your Own theme:
const iconTheme = createTheme({
    palette: {
        primary: {
            main: "#C47F38",
        },
        secondary: {
            main: "#EBDED4",
        },
        hoverBlue: {
            main: "#177dff",
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

    window.EventBus = EventBus;
    if (!window.isDev) window.isDev = false;

    if (!checkMobile()) {
        let fluidContainer = document.body.querySelector(
            ".webgl-fluid-container"
        );
        new WebGL({
            $wrapper: fluidContainer,
        });
    }

    const handleClick = (e, id) => {
        // console.log("handleClick", e, id);
        let element;
        if (id === "work-exp") {
            element = document.querySelector(".slated");
        } else if (id === "creative") {
            element = document.querySelector(".creative");
        } else if (id === "education") {
            element = document.querySelector(".iitm");
        }
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        }
    };
    return (
        <ThemeProvider theme={iconTheme}>
            <Header />
            <div className="container">
                <Landing onClick={handleClick} />
                <Content />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
