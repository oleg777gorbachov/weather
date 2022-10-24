import React from "react";

type propsType = {
  first: string | number | null;
  firstText: string;
  second: string | number | null;
  secondText: string;
};

function Row(props: propsType) {
  return (
    <div className="row">
      <p>
        {props.firstText} <em>{props.first}</em>
      </p>
      <div className="separator"></div>
      <p>
        {props.secondText} <em>{props.second}</em>
      </p>
    </div>
  );
}

export default Row;
