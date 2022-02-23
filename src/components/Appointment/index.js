import React from "react";
import "./styles.scss";
import Header from "./Header";

export default function Appointment(props) {
  console.log("props.time??", props.time);
  const setAppointment = function () {
    return props.time
      ? `Appointments at ${(<Header time={props.time} />)}`
      : `No Appointments`;
  };
  return <article className="appointment">{setAppointment()}</article>;
}
