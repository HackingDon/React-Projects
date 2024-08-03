import { useEffect, useState } from "react";
import "./clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());
  const formater = (value) => {
    return value < 10 ? `0${value}` : value;
  };
  const formathour = (hour) => {
    return hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formatdate = (date) => {
    const days = {
      weekday: "long",
      year: "numeric",
      day: "numeric",
      month: "long",
    };
    return date.toLocaleDateString(undefined, days);
  };

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">
          {formater(formathour(time.getHours()))} :{formater(time.getMinutes())}{" "}
          : {formater(time.getSeconds())}
        </div>
        <div className="date">{formatdate(time)}</div>
      </div>
    </>
  );
}

export default Clock;
