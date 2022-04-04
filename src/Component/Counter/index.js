import { useEffect, useState } from "react";
import {
  getValueFromLocalStorage,
  setValueInLocalStorage,
} from "../../utils/helper";
import Button from "../Button";
import CounterLeft from "../CounterLeft";

import CounterMatch from "../CounterMatch";
import CounterRight from "../CounterRight";
import MatchResult from "../MatchResult";
import Style from "./index.module.css";
export default function Counter() {
  const [stay, setStay] = useState(true);
  const [end, setEnd] = useState(true);
  // const [editMatch, setEditMatch] = useState();

  const [isMatchOver, setIsMatchOver] = useState(false);

  useEffect(() => {
    let aMatch = getValueFromLocalStorage("team_a_match_over");
    let bMatch = getValueFromLocalStorage("team_b_match_over");

    const isMatchOverFromLocalStirage = aMatch && bMatch;
    setIsMatchOver(isMatchOverFromLocalStirage);
  }, []);

  const seeResult = () => {
    if (isMatchOver) {
      setStay(false);
    } else {
      alert("Note: You have to play as many overs as you have chosen");
      return;
    }

    // if (wicket === 10) {
    //   setStay(true);
    // }
  };
  const resetScore = () => {
    setValueInLocalStorage("team_a_match_over", false);

    setValueInLocalStorage("teamaScore", 0);

    setValueInLocalStorage("teamaBalls", 0);

    setValueInLocalStorage("teamaWickets", 0);

    setValueInLocalStorage("teamaOvers", 0);

    setValueInLocalStorage(
      "remaining_over_for_a",
      getValueFromLocalStorage("over")
    );
    setValueInLocalStorage("team_b_match_over", false);

    setValueInLocalStorage("teambScore", 0);

    setValueInLocalStorage("teambBalls", 0);

    setValueInLocalStorage("teambWickets", 0);

    setValueInLocalStorage("teambOvers", 0);

    setValueInLocalStorage(
      "remaining_over_for_b",
      getValueFromLocalStorage("over")
    );

    window.location.reload();
  };
  const editMatch = () => {
    setValueInLocalStorage("isEdit", true);
    window.location.reload();
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
            <div className={Style.resetScore}>
              <Button action={seeResult} buttonText="See Match Result" />
              <Button action={resetScore} buttonText="Reset Both Team Score" />
              <Button action={editMatch} buttonText="Edit" />
            </div>
          </div>
        </div>
      ) : (
        <>
          {end ? (
            <div className={Style.seeMatchResult}>
              <MatchResult />
              <div className={Style.endMatchReturn}>
                <div className={Style.endMatch}>
                  <Button action={endMatch} buttonText="Finish Match" />
                </div>
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
