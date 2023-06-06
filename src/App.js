import './App.scss';
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Landing from './pages/Landing';
import * as amplitude from '@amplitude/analytics-browser';

// Or Create your Own theme:
const iconTheme = createTheme({
  palette: {
    primary: {
      main: '#C47F38'
    },
    secondary: {
      main: '#EBDED4'
    }
  }
});

amplitude.init('71a74323057e3cdb289336830873113f', undefined, { defaultTracking: { sessions: true, pageViews: true, formInteractions: true, fileDownloads: true } });

function App() {
  amplitude.track('Page view');
  return (
    <ThemeProvider theme={iconTheme}>
      <Header />
      <div className="container">
        <Landing />
      </div>
    </ThemeProvider >
  );
}

export default App;
