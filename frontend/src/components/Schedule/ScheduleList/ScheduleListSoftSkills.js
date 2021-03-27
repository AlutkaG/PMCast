import ScheduleCard from "../ScheduleCard/ScheduleCard";
import pict from "../../../img/gessler.jpg";

const softSkillsList = [
  {
    photo: pict,
    date: "04.04.2021 webinar",
    header: "Soft skills",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. tutaj będzie opisany webinar w sensie tematycznym",
    name: "Magda Gessler",
    status: "KUCHNIA I MIKROFALA",
  },
  {
    photo: pict,
    date: "04.04.2021 webinar",
    header: "Soft skills",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. tutaj będzie opisany webinar w sensie tematycznym",
    name: "Magda Gessler",
    status: "KUCHNIA I MIKROFALA",
  },
  {
    photo: pict,
    date: "04.04.2021 webinar",
    header: "Soft skills",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. tutaj będzie opisany webinar w sensie tematycznym",
    name: "Magda Gessler",
    status: "KUCHNIA I MIKROFALA",
  },
];
const ScheduleListSoftSkills = (props) => {
  return (
    <div>
      <ScheduleCard list={softSkillsList} />
    </div>
  );
};

export default ScheduleListSoftSkills;
