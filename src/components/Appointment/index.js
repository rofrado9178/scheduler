import React from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import useVisualMode from "hooks/useVisualMode";
//mode for transition
const EMPTY = "EMPTY"; //for no interview display
const SHOW = "SHOW"; //for showing the appointment
const CREATE = "CREATE"; //to create the interview
const SAVING = "SAVING"; //saving transition display
const DELETE = "DELETE"; //delete transition display
const CONFIRM = "CONFIRM"; //confirm transition display before delete
const EDIT = "EDIT"; //transition to edit display component from show
const ERROR_SAVE = "ERROR_SAVE"; //error when saving display
const ERROR_DELETE = "ERROR_DELETE"; //error when delete

export default function Appointment(props) {
  //using helper function to do transition
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  //saving transition
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then((response) => {
        transition(SHOW);
      })
      .catch((error) => {
        transition(ERROR_SAVE, true);
      });
  }

  //cancel interview transition and
  //delete it from data using deleteInterview function
  function cancel() {
    transition(DELETE, true);
    props
      .deleteInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((error) => transition(ERROR_DELETE, true));
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer.name}
          onDelete={() => {
            transition(CONFIRM);
          }}
          onEdit={() => {
            transition(EDIT);
          }}
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message={"Are you sure want to delete the appointment?"}
          onCancel={back}
          onConfirm={cancel}
        />
      )}
      {mode === DELETE && <Status message="Deleting.." />}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onSave={save} onCancel={back} />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
        />
      )}
      {mode === ERROR_SAVE && <Error message="save" onClose={back} />}
      {mode === ERROR_DELETE && <Error message="delete" onClose={back} />}
    </article>
  );
}
