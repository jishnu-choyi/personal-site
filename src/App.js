import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import ShowCase from "./components/ShowCase";
import showCases from "./views/work/work-data";
import * as amplitude from "@amplitude/analytics-browser";
import Travel from "./components/Travel";

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
        } else if (data.itemType === "work-exp") {
            return <ShowCase key={data.id} showCaseData={data} />;
        }
    });

    return (
        <ThemeProvider theme={iconTheme}>
            <Header />
            <div className="container">
                {/* <Landing /> */}
                {renderedShowCases}
            </div>
        </ThemeProvider>
    );
}

export default App;
