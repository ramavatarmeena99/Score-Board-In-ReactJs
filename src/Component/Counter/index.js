import { useState } from "react";
import { getValueFromLocalStorage } from "../../utils/helper";
import Button from "../Button";
import CounterLeft from "../CounterLeft";

import CounterMatch from "../CounterMatch";
import CounterRight from "../CounterRight";
import Style from "./index.module.css";
export default function Counter() {
  const [stay, setStay] = useState(true);
  const endMatch = () => {
    localStorage.clear();
    setStay(false);
  };

  return (
    <>
      {stay ? (
        <div className={Style.counter}>
          <h5>Total Overs ={getValueFromLocalStorage("over")}</h5>

          <div className={Style.matchScore}>
            <div className={Style.left}>
              <CounterLeft />
            </div>
            <div className={Style.right}>
              <CounterRight />
            </div>
          </div>
          <div className={Style.endButton}>
            <Button action={endMatch} buttonText="End Match" />
          </div>
        </div>
      ) : (
        <CounterMatch />
      )}
    </>
  );
}
