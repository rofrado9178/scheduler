import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const selectInterviewer = classNames({
    "interviewers__item--selected": props.selected,
  });
  return (
    <li
      className="interviewers__item"
      key={props.id}
      onClick={() => props.setInterviewer(props.id)}
      className={selectInterviewer}
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
