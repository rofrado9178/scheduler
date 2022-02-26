const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers: [1, 2],
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5],
      interviewers: [1, 2],
    },
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 },
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 },
    },
  },
  interviewers: {
    "1": {
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png",
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png",
    },
  },
};

export function getAppointmentsForDay(state, day) {
  const selectedAppointment = state.days.find((selectedDay) => {
    return selectedDay.name === day;
  });
  if (state.days.length === 0 || selectedAppointment === undefined) {
    return [];
  }
  return selectedAppointment.appointments.map((id) => state.appointments[id]);
}

// console.log(getAppointmentsForDay(state, "Monday"));

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  return { ...interview, interviewer };
}

export function getInterviewersForDay(state, day) {
  const selectedAppointment = state.days.find((selectedDay) => {
    return selectedDay.name === day;
  });
  if (state.days.length === 0 || selectedAppointment === undefined) {
    return [];
  }
  return selectedAppointment.interviewers.map((id) => state.interviewers[id]);
}

// console.log(getInterviewersForDay(state, "Monday"));
