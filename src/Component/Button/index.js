import React from "react";

import Style from "./index.module.css";

export default function Button(props) {
  const action = () => {
    props.action();
  };

  return (
    <div className={Style.buttons}>
      <button onClick={action}>{props.buttonText}</button>
    </div>
  );
}
