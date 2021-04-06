import "./ScheduleCard.css";

const ScheduleCard = (props) => {
  const list = props.list.map((item, id) => {
    return (
      <div key={id} className="schedule_card">
        <div className="schedule_card-inside">
          <img src={item.photo} alt="" className="schedule_card-photo" />
          <div>
            <div className="schedule_card-text date">{item.date}</div>
            <div className="schedule_card-text header">{item.header}</div>
            <div className="schedule_card-text content">{item.content}</div>
            <div className="schedule_card-display-inline">
              <div className="schedule_card-text name">{item.name}</div>
              <span className="spacer" />
              <div className="schedule_card-text status">{item.status}</div>
            </div>
          </div>
        </div>
        <div className="schedule_card-inside">
          <div></div>
          <button className="schedule_card-btn">FORMULARZ ZGŁOSZENIOWY</button>
        </div>
      </div>
    );
  });
  return <div style={{ width: "100vw" }}>{list}</div>;
};

export default ScheduleCard;
