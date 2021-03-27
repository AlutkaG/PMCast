import "./About.css";
import pict from "../../img/img2.svg";
import pict3 from "../../img/img3.svg";
import pict4 from "../../img/img4.svg";
import TimeLine from "../TimeLine/TimeLine.js";

const About = () => {
  return (
    <div id="about">
      <div className="about-section">
        <div className="about-left-side">
          <div className="about-header">O PM Cast</div>
          <div className="about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in trzeba będzie tęz powtórzyć inf o środzie bold
            tutaj będzie opisany cel i sens tego wydarzenia. będzie się kończył
            tym, że zdecydowaliśmy podzielić każdy cykl na 2 częściLorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            trzeba będzie tęz powtórzyć inf o środzie bold tutaj będzie opisany
            cel i sens tego wydarzenia. będzie się kończył tym, że
            zdecydowaliśmy podzielić każdy cykl na 2 części
          </div>
        </div>
        <div className="about-right-side">
          <img src={pict} alt="" className="about-img" />
        </div>
      </div>
      <TimeLine
        year={2021}
        month={[4, 4, 4, 4, 5, 5, 5, 5]}
        day={[6, 13, 20, 27, 4, 11, 18, 25]}
        hour={19}
        minutes={0}
      />
      <div className="about-section second">
        <div>
          <div className="about-subheader">WEBINAR</div>
          <img src={pict3} alt="" className="about-subimg" />
          <div className="about-subcontent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </div>
        </div>
        <div>
          <div className="about-subheader">DEBATA</div>
          <img src={pict4} alt="" className="about-subimg" />
          <div className="about-subcontent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
