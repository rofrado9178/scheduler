import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  //fetch data from api
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      //inject data to the state
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  //set default state
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  //change the state of each day function
  const setDay = (day) => {
    setState({ ...state, day });
  };

  //change the spots state function everytime we update the state by add, delete
  function updateSpots(appointments) {
    //find the selected day
    const currentDay = state.days.find((day) => {
      return day.name === state.day;
    });
    //find the index of the selected day
    const currentDayIndex = state.days.findIndex((day) => {
      return day.name === state.day;
    });
    //filter all interview with null value and set it into an array
    const nullAppointments = currentDay.appointments.filter((id) => {
      return !appointments[id].interview;
    });
    let spots = nullAppointments.length;

    //set an object to update the state of spots
    const updateCurrentDay = {
      ...currentDay,
      spots,
    };

    //update the current day and add new state of updateCurrentDay
    let newDays = [...state.days];
    newDays[currentDayIndex] = updateCurrentDay;

    return newDays;
  }

  //function to add interview
  function bookInterview(id, interview) {
    //each appointment

    if (!interview.student || !interview.interviewer) {
      return "Cannot save";
    }
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    //whole appointments list
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    //update spots state everytime new interview added
    const days = updateSpots(appointments);

    //update the data into database
    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => setState({ ...state, appointments, days }));
  }

  //delete interview function
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(appointments);
    //delete in database base on appointment id for each day
    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => setState({ ...state, appointments, days }));
  }

  return { state, setDay, bookInterview, cancelInterview, setState };
}
