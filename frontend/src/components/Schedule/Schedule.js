import ScheduleListManagement from "./ScheduleList/ScheduleListManagement";
import ScheduleListSoftSkills from "./ScheduleList/ScheduleListSoftSkills";
import ScheduleListInterpersonalCommunication from "./ScheduleList/ScheduleListInterpersonalCommunication";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./Schedule.css";
import { useState } from "react";

const Schedule = () => {
  const [activeLink, setActiveLink] = useState(1);
  return (
    <BrowserRouter>
      <div id="schedule">
        <div className="schedule-header">HARMONOGRAM WYDARZENIA</div>
        <div className="schedule-mini_navbar">
          <div>
            <Link
              to="/management"
              className="schedule-link"
              onClick={() => setActiveLink(1)}
            >
              Zarządzanie zespołem i produktem
            </Link>
            <hr
              className={activeLink === 1 ? "schedule-separator" : null}
              style={activeLink === 1 ? null : { display: "none" }}
            />
          </div>
          <div>
            <Link
              to="/softSkills"
              className="schedule-link"
              onClick={() => setActiveLink(2)}
            >
              Umiejętności <br />
              miękkie
            </Link>
            <hr
              className={activeLink === 2 ? "schedule-separator" : null}
              style={activeLink === 2 ? null : { display: "none" }}
            />
          </div>
          <div>
            <Link
              to="/interpersonalCommunication"
              className="schedule-link"
              onClick={() => setActiveLink(3)}
            >
              Komunikacja <br />
              interpersonalna
            </Link>
            <hr
              className={activeLink === 3 ? "schedule-separator" : null}
              style={activeLink === 3 ? null : { display: "none" }}
            />
          </div>
        </div>
        <Switch>
          <Route path="/management" component={ScheduleListManagement} />
          <Route path="/softSkills" component={ScheduleListSoftSkills} />
          <Route
            path="/interpersonalCommunication"
            component={ScheduleListInterpersonalCommunication}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Schedule;
