import React, { Fragment } from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

export default function Appointment(props) {
  console.log("this is props.interview", props.interview);
  const setAppointment = function () {
    return props.time
      ? `Appointments at ${(<Header time={props.time} />)}`
      : `No Appointments`;
  };
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer.name}
        />
      ) : (
        <Empty />
      )}
    </article>
  );
}
