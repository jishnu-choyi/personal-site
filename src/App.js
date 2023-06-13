import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import ShowCase from "./components/ShowCase";
//import * as amplitude from "@amplitude/analytics-browser";

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

// amplitude.init('71a74323057e3cdb289336830873113f', undefined, { defaultTracking: { sessions: true, pageViews: true, formInteractions: true, fileDownloads: true } });

function App() {
    // amplitude.track('Page view');

    const showCases = [
        {
            title: "Technical Co-founder",
            brief: "Slated Technologies Inc, Dover, DE 19901",
            skillIds: ["js", "ts", "angular", "react"],
        },
    ];

    return (
        <ThemeProvider theme={iconTheme}>
            <Header />
            <div className="container">
                <Landing />
                <ShowCase showCaseData={showCases[0]} />
            </div>
        </ThemeProvider>
    );
}

export default App;
