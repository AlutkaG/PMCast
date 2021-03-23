import "./WelcomeSection.css";
import pict from "../../img/img1.svg";

const WelcomeSection = () => {
  return (
    <div id="welcome_section">
      <div className="welcome_section-left-side">
        <div className="welcome_section-content-div">
          <div className="welcome_section-title">PM Cast 2021</div>
          <div className="welcome_section-subtitle">
            CZYLI JAK ZARZĄDZAĆ EFEKTYWNIE
          </div>
        </div>
      </div>
      <div>
        <img src={pict} alt="" className="welcome_section-img" />
      </div>
    </div>
  );
};

export default WelcomeSection;
