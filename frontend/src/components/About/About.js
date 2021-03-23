import "./About.css";
import pict from "../../img/img2.svg";

const About = () => {
  return (
    <div id="about">
      <div className="about-left-side">
        <div className="about-header">O PM Cast</div>
        <div className="about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in trzeba będzie tęz powtórzyć inf o środzie bold tutaj
          będzie opisany cel i sens tego wydarzenia. będzie się kończył tym, że
          zdecydowaliśmy podzielić każdy cykl na 2 częściLorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in trzeba będzie tęz powtórzyć
          inf o środzie bold tutaj będzie opisany cel i sens tego wydarzenia.
          będzie się kończył tym, że zdecydowaliśmy podzielić każdy cykl na 2
          części
        </div>
      </div>
      <div className="about-right-side">
        <img src={pict} alt="" className="about-img" />
      </div>
    </div>
  );
};

export default About;
