import "./App.css";
import About from "../src/components/About/About";
import WelcomeSection from "../src/components/WelcomeSection/WelcomeSection";
import Infobar from "../src/components/Infobar/Infobar";
import Schedule from "../src/components/Schedule/Schedule";

function App() {
  return (
    <div className="App">
      <WelcomeSection />
      <Infobar />
      <About />
      <Schedule />
    </div>
  );
}

export default App;
