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
            Jeżeli dopiero zaczynasz swoją przygodę z Project Managementem i
            jesteś ciekawy co, jak i dlaczego robią współcześni PM’owie, to już
            teraz odpaliliśmy dla Was nowy cykl „PM Cast”, w którym dowiecie się
            po kolei jak zrobić z igły widły. Dyskusje, Konkursy, Materiały
            Szkoleniowe, Debaty i Gry oraz to co najważniejsze czyli
            merytoryczny przekaz informacji oraz dobrych praktyk z obszaru PM.
            <br />
            <strong> W każdy wtorek o godzinie 19:00</strong>
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
          <div className="about-subheader">WEBINARY</div>
          <img src={pict3} alt="" className="about-subimg" />
          <div className="about-subcontent">
            Martwisz się, że informacji i technik poznanych na Webinarach nie
            będziesz mógł zapamiętać, albo zastosować w praktyce? Nie martw się.
            Oprócz materiałów które Ci udostępnimy, raz w miesiącu organizujemy
            review Webinarów -debatę pomiędzy praktykiem i teoretykiem.
          </div>
        </div>
        <div>
          <div className="about-subheader">DEBATA</div>
          <img src={pict4} alt="" className="about-subimg" />
          <div className="about-subcontent">
            Debaty to takie nasze sztuki walki. Rożne dyskusje zamknięte w
            odgórnie przyjętych ramach robią nie tylko świetny trening dla
            mózgu, lecz przedstawiają ten sam problem z wielu perspektyw. Oj
            będzie się działo!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
