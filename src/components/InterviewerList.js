import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";

//list to show all interviewer component
export default function InterviewerList(props) {
  //map all the interviewer and show it into list interviewers
  const interviewers = props.interviewers;
  const interviewerLists = interviewers.map((interviewer) => (
    <InterviewerListItem
      {...interviewer}
      key={interviewer.id}
      selected={props.value === interviewer.id}
      setInterviewer={() => props.onChange(interviewer.id)}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerLists}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
