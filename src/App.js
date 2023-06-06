import CTACardList from "./components/CTACardList";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="page-container">
        <div className="left">
          <div className="main-title">Hello, I am Jishnu</div>
          <div className="main-image">

          </div>
        </div>
        <div className="right">

        </div>
        <CTACardList />
      </div>
    </div>
  );
}

export default App;
