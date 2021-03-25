import { useEffect, useState } from "react";
import { IoIosLaptop } from "react-icons/io";
import "./TimeLine.css";

const TimeLine = (props) => {
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [eventStart, setEventStart] = useState(false);
  const [unactiveEvent, setUnactiveEvent] = useState(false);
  const [ind, setInd] = useState(0);
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  useEffect(() => {
    let year = 0,
      month = 0,
      day = 0,
      h = 0,
      m = 0,
      s = 0,
      dyear = 0,
      dmonth = 0,
      dday = 0,
      dhour = 0,
      dminutes = 0,
      dseconds = 0;

    var clock = setInterval(() => {
      let now = new Date();
      let eventDate = new Date(
        props.year,
        props.month[ind] - 1,
        props.day[ind],
        props.hour,
        props.minutes
      );
      let oneDay = 24 * 60 * 60 * 1000; // 1 dzień w milisekundach
      let dtime = eventDate.getTime() - now.getTime(); //różnica czasów
      dday = Math.floor(dtime / oneDay);
      let daysToDateFix = dday < 1 ? 1 : dday;
      dhour = Math.floor(((dtime / oneDay) % daysToDateFix) * 24);
      dminutes = Math.floor(
        (((dtime / oneDay) % daysToDateFix) * 24 - dhour) * 60
      );
      dseconds = Math.floor(
        ((((dtime / oneDay) % daysToDateFix) * 24 - dhour) * 60 - dminutes) * 60
      );
      /* date = new Date();
      year = date.getFullYear();
      month = date.getMonth() + 1;
      day = date.getDate();
      h = date.getHours();
      m = date.getMinutes();
      s = date.getSeconds();
      dyear = props.year - year;
      dmonth = props.month[ind] - month;
     
      dhour = props.hour - h;
      dminutes = props.minutes - m - 1;
      dseconds = 59 - s;
      if(dmonth==0){
        dday = props.day[ind] - day;
      }else{
        dday = props.day[ind] - day;
      }
      if (dhour < 0) {
        dhour = 0;
      }
      if (dminutes < 0) dseconds = -1 * dseconds;
      if (dday < 0) dday = 0;*/

      if (
        dyear < 1 &&
        dmonth < 1 &&
        dday < 1 &&
        dhour < 1 &&
        dminutes < 1 &&
        dseconds < 1
      ) {
        setInd(ind + 1);
        if (dminutes <= 0 && dminutes >= -1) {
          setEventStart(true);
          sleep(60000).then(() => {
            setEventStart(false);
          });
        }
      } else {
        setDays(dday);
        setHours(dhour);
        setMinutes(dminutes);
        setSeconds(dseconds);
      }
    }, 1000);
    if (ind === props.minutes.length) {
      clearInterval(clock);
      setUnactiveEvent(true);
      setEventStart(false);
    } else {
    }
  }, [
    unactiveEvent,
    eventStart,
    ind,
    props.minutes,
    props.year,
    props.month,
    props.day,
    props.hour,
  ]);

  return (
    <div id="timeline">
      <IoIosLaptop className="timeline-laptop" />
      {eventStart === false ? (
        <div>
          {unactiveEvent ? (
            <div>
              <div className="timeline-end">KONIEC WYDARZENIA</div>
              <hr className="timeline-separator" />
            </div>
          ) : (
            <div>
              <div className="timeline-header">KOLEJNE SPOTKANIE</div>
              <div className="timeline-subheader">ROZPOCZNIE SIĘ ZA</div>
              <hr className="timeline-separator" />
              <div className="timeline-boxes">
                <div className="timeline-boxitem granat">
                  <div className="timeline-number">{days}</div>
                  <div className="timeline-info">dni</div>
                </div>
                <div className="timeline-boxitem blue">
                  <div className="timeline-number">{hours}</div>
                  <div className="timeline-info">godzin</div>
                </div>
                <div className="timeline-boxitem red">
                  <div className="timeline-number">{minutes}</div>
                  <div className="timeline-info">minut</div>
                </div>
                <div className="timeline-boxitem darkblue">
                  <div className="timeline-number">{seconds}</div>
                  <div className="timeline-info">sekund</div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="timeline-continue">WYDARZENIE W TRAKCIE</div>
          <hr className="timeline-separator" />
        </div>
      )}
    </div>
  );
};

export default TimeLine;
