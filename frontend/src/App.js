import "./App.css";
import About from "../src/components/About/About";
import WelcomeSection from "../src/components/WelcomeSection/WelcomeSection";
import Infobar from "../src/components/Infobar/Infobar";

function App() {
  return (
    <div className="App">
      <WelcomeSection />
      <Infobar />
      <About />
    </div>
  );
}

export default App;
