import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

//component to show the interviewer and selected interviewer
export default function InterviewerListItem(props) {
  //add new class when get selected and change the scss with selected display
  const selectInterviewer = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  return (
    <li
      className={selectInterviewer}
      key={props.id}
      onClick={props.setInterviewer}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected ? props.name : ""}
    </li>
  );
}
