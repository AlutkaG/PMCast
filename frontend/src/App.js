import "./App.css";
import About from "../src/components/About/About";
import WelcomeSection from "../src/components/WelcomeSection/WelcomeSection";
import Infobar from "../src/components/Infobar/Infobar";
import TimeLine from "../src/components/TimeLine/TimeLine";

function App() {
  return (
    <div className="App">
      <WelcomeSection />
      <Infobar />
      <About />
      <TimeLine />
    </div>
  );
}

export default App;
