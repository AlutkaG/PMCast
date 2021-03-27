import ScheduleCard from "../ScheduleCard/ScheduleCard";
import pict from "../../../img/maklowicz.jpg";

const managementList = [
  {
    photo: pict,
    date: "04.04.2021 webinar",
    header: "Nieodkryta potęga design thinking",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. tutaj będzie opisany webinar w sensie tematycznym",
    name: "ROBERT MAKŁOWICZ",
    status: "PROJECT MANAGER",
  },
  {
    photo: pict,
    date: "04.04.2021 webinar",
    header: "Nieodkryta potęga design thinking",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. tutaj będzie opisany webinar w sensie tematycznym",
    name: "ROBERT MAKŁOWICZ",
    status: "PROJECT MANAGER",
  },
  {
    photo: pict,
    date: "04.04.2021 webinar",
    header: "Nieodkryta potęga design thinking",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. tutaj będzie opisany webinar w sensie tematycznym",
    name: "ROBERT MAKŁOWICZ",
    status: "PROJECT MANAGER",
  },
];

const ScheduleListManagement = (props) => {
  console.log(managementList.date);
  return (
    <div>
      <ScheduleCard list={managementList} />
    </div>
  );
};

export default ScheduleListManagement;
