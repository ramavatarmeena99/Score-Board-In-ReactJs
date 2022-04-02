import { useState } from "react";
import { getValueFromLocalStorage } from "../../utils/helper";
import Button from "../Button";
import CounterLeft from "../CounterLeft";

import CounterMatch from "../CounterMatch";
import CounterRight from "../CounterRight";
import MatchResult from "../MatchResult";
import Style from "./index.module.css";
export default function Counter() {
  const [stay, setStay] = useState(true);
  const [end, setEnd] = useState(true);

  const seeResult = () => {
    setStay(false);
  };
  const endMatch = () => {
    localStorage.clear();

    setEnd(false);
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
            <Button action={seeResult} buttonText="See Match Result" />
          </div>
        </div>
      ) : (
        <>
          {end ? (
            <div className={Style.seeMatchResult}>
              <MatchResult />
              <div className={Style.endMAtch}>
                <Button action={endMatch} buttonText="Finish Match" />
              </div>
            </div>
          ) : (
            <CounterMatch />
          )}
        </>
      )}
    </>
  );
}
