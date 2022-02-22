import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days } = props;
  console.log(props);
  const dayListItem = days.map((day) => (
    <DayListItem
      key={day.id}
      {...day}
      selected={day.name === props.day}
      setDay={props.setDay}
      full={day.spots === 0}
    />
  ));
  return <ul>{dayListItem}</ul>;
}
