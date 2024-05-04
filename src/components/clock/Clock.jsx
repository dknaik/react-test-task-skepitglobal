import { useState, useEffect } from "react";
import "../../styles/clock.css";
const Clock = () => {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
  });
  const dateString = "2024-03-06";

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = dayNames[date.getDay()];
    const month = monthNames[date.getMonth()];
    const dateOfMonth = date.getDate();

    const formattedDate = `${dayOfWeek}, ${month} ${dateOfMonth}${getOrdinalSuffix(
      dateOfMonth
    )}`;

    return formattedDate;
  };

  const getOrdinalSuffix = (date) => {
    if (date > 3 && date < 21) return "th";
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <div className="clock">
      <div>
        <span>{convertToTwoDigit(time.hours % 24)}:</span>
        <span>{convertToTwoDigit(time.minutes)}</span>
      </div>
      <p>{formatDate(dateString)}</p>
    </div>
  );
};

export default Clock;
