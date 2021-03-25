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
      <TimeLine
        year={2021}
        month={[4, 4, 4, 4, 5, 5, 5, 5]}
        day={[6, 13, 20, 27, 4, 11, 18, 25]}
        hour={19}
        minutes={0}
      />
    </div>
  );
}

export default App;
