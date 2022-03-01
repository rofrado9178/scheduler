import React from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } =
    useApplicationData();

  const dailyAppointment = getAppointmentsForDay(state, state.day);
  console.log("this is state.days.spots", state);
  //map all days
  const eachAppointment = dailyAppointment.map((item) => {
    //passing the interview schedule
    const interview = getInterview(state, item.interview);
    //passing the interviewers list to the create form
    const interviewers = getInterviewersForDay(state, state.day);

    return (
      <Appointment
        key={item.id}
        {...item}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        deleteInterview={cancelInterview}
      />
    );
  });
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
      </section>
      <section className="schedule">
        {eachAppointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
