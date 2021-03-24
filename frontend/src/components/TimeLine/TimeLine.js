import { IoIosLaptop } from "react-icons/io";
import "./TimeLine.css";

const TimeLine = () => {
  return (
    <div id="timeline">
      <IoIosLaptop className="timeline-laptop" />
      <div className="timeline-header">KOLEJNE SPOTKANIE</div>
      <div className="timeline-subheader">ROZPOCZNIE SIĘ ZA</div>
      <hr className="timeline-separator" />
      <div className="timeline-boxes">
        <div className="timeline-boxitem granat">
          <div className="timeline-number">15</div>
          <div className="timeline-info">dni</div>
        </div>
        <div className="timeline-boxitem blue">
          <div className="timeline-number">15</div>
          <div className="timeline-info">godzin</div>
        </div>
        <div className="timeline-boxitem red">
          <div className="timeline-number">15</div>
          <div className="timeline-info">minut</div>
        </div>
        <div className="timeline-boxitem darkblue">
          <div className="timeline-number">15</div>
          <div className="timeline-info">sekund</div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
