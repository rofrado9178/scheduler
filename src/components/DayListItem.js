import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.full,
  });

  const formatSpot = function () {
    return (
      <h3 className="text--light">
        {props.spots > 1
          ? `${props.spots} spots remaining`
          : props.spots === 1
          ? `${props.spots} spot remaining`
          : `no spots remaining`}
      </h3>
    );
  };

  return (
    <li
      onClick={() => props.setDay(props.name)}
      className={dayClass}
      data-testid="day"
    >
      <h2 className={"text--regular"}>{props.name}</h2>
      {formatSpot()}
    </li>
  );
}
