//get every appointment for each day helper function

export function getAppointmentsForDay(state, day) {
  const selectedAppointment = state.days.find((selectedDay) => {
    return selectedDay.name === day;
  });
  if (state.days.length === 0 || selectedAppointment === undefined) {
    return [];
  }
  return selectedAppointment.appointments.map((id) => state.appointments[id]);
}

//get interview helper to show all interview for each day
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  return { ...interview, interviewer };
}

//get a list of interviewer base on array of id data
export function getInterviewersForDay(state, day) {
  const selectedAppointment = state.days.find((selectedDay) => {
    return selectedDay.name === day;
  });
  if (state.days.length === 0 || selectedAppointment === undefined) {
    return [];
  }
  return selectedAppointment.interviewers.map((id) => state.interviewers[id]);
}
