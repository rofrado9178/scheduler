import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      // console.log("this is all", all);
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => {
    setState({ ...state, day });
    console.log("this is from set day", state);
  };

  function updateSpots(appointments) {
    const currentDay = state.days.find((day) => {
      return day.name === state.day;
    });
    const currentDayIndex = state.days.findIndex((day) => {
      return day.name === state.day;
    });

    const nullAppointments = currentDay.appointments.filter((id) => {
      return !appointments[id].interview;
    });
    let spots = nullAppointments.length;

    const updateCurrentDay = {
      ...currentDay,
      spots,
    };

    let newDays = [...state.days];
    newDays[currentDayIndex] = updateCurrentDay;

    return newDays;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(appointments);
    console.log("this is appointments", appointments);
    console.log("this is appointmet", appointment);

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => setState({ ...state, appointments, days }));
  }

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

    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => setState({ ...state, appointments, days }));
  }

  return { state, setDay, bookInterview, cancelInterview, setState };
}
