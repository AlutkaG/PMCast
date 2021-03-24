import "./Infobar.css";
import {
  MdLaptop,
  MdWatchLater,
  MdWhatshot,
  MdFormatListNumbered,
} from "react-icons/md";

const Infobar = () => {
  return (
    <div id="infobar">
      <div className="infobar-item granat">
        <div className="infobar-left-side">
          <MdWatchLater className="infobar-icon" />
        </div>
        <div className="infobar-right-side">
          <div className="infobar-header">czas</div>
          <div className="infobar-info">środa 19:00</div>
        </div>
      </div>
      <div className="infobar-item blue">
        <div className="infobar-left-side">
          <MdLaptop className="infobar-icon" />
        </div>
        <div className="infobar-right-side">
          <div className="infobar-header">webinary</div>
          <div className="infobar-info">6</div>
        </div>
      </div>
      <div className="infobar-item red">
        <div className="infobar-left-side">
          <MdWhatshot className="infobar-icon" />
        </div>
        <div className="infobar-right-side">
          <div className="infobar-header">debaty</div>
          <div className="infobar-info">3</div>
        </div>
      </div>
      <div className="infobar-item darkblue">
        <div className="infobar-left-side">
          <MdFormatListNumbered className="infobar-icon" />
        </div>
        <div className="infobar-right-side">
          <div className="infobar-header">cykle</div>
          <div className="infobar-info">3</div>
        </div>
      </div>
    </div>
  );
};

export default Infobar;
