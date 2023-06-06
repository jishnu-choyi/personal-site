import './App.scss';
import { ThemeProvider, createTheme } from "@mui/material";
import CTACardList from "./components/CTACardList";
import Header from "./components/Header";
import Landing from './pages/Landing';

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

function App() {
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
