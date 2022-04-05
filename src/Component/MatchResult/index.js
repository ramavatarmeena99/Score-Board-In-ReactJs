import React, { useEffect, useState } from "react";

import { getValueFromLocalStorage } from "../../utils/helper";
import Style from "./index.module.css";

export default function MatchResult() {
  const [winner, setWinner] = useState();

  var winnerTeamA = getValueFromLocalStorage("teama");
  var winnerTeamB = getValueFromLocalStorage("teamb");
  var scoreA = getValueFromLocalStorage("teamaScore");
  var scoreB = getValueFromLocalStorage("teambScore");
  var wicketsA = getValueFromLocalStorage("teamaWickets");
  var wicketsB = getValueFromLocalStorage("teambWickets");

  useEffect(() => {
    if (scoreA >= scoreB) {
      setWinner(winnerTeamA);
    } else {
      setWinner(winnerTeamB);
    }
  }, [scoreA, scoreB, winnerTeamA, winnerTeamB]);
  if (scoreA === "") {
    scoreA = 0;
  }
  if (scoreB === "") {
    scoreB = 0;
  }
  if (wicketsA === "") {
    wicketsA = 0;
  }
  if (wicketsB === "") {
    wicketsB = 0;
  }
  return (
    <div className={Style.top}>
      <div className={Style.result}>
        <div className={Style.teamAResult}>
          <div className={Style.team}>
            <h3>Team A</h3>
          </div>

          <div className={Style.teamASummery}>
            <div className={Style.resultInRow}>
              <div className={Style.resultInRowLeft}>
                <h2>Name</h2>
              </div>
              <div className={Style.resultInRowRight}>
                <h2>= {getValueFromLocalStorage("teama")}</h2>
              </div>
            </div>
            <div className={Style.resultInRow}>
              <div className={Style.resultInRowLeft}>
                <h2>Total Over</h2>
              </div>
              <div className={Style.resultInRowRight}>
                <h2>= {getValueFromLocalStorage("over")}</h2>
              </div>
            </div>

            <div className={Style.resultInRow}>
              <div className={Style.resultInRowLeft}>
                <h2>Played Over </h2>
              </div>
              <div className={Style.resultInRowRight}>
                <h2>
                  {" "}
                  = {getValueFromLocalStorage("teamaOvers")}.
                  {getValueFromLocalStorage("teamaBalls")}
                </h2>
              </div>
            </div>
            <div className={Style.resultInRow}>
              <div className={Style.resultInRowLeft}>
                <h2>Score </h2>
              </div>
              <div className={Style.resultInRowRight}>
                <h2>
                  {" "}
                  = {getValueFromLocalStorage("teamaScore")}/
                  {getValueFromLocalStorage("teamaWickets")}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.teamBResult}>
          <div className={Style.team}>
            <h3>Team B</h3>
          </div>
          <div className={Style.teamBSummery}>
            <div className={Style.resultInRow}>
              <div className={Style.resultInRowLeft}>
                <h2>Name</h2>
              </div>
              <div className={Style.resultInRowRight}>
                <h2>= {getValueFromLocalStorage("teamb")}</h2>
              </div>
            </div>
            <div className={Style.resultInRow}>
              <div className={Style.resultInRowLeft}>
                <h2>Total Over</h2>
              </div>
              <div className={Style.resultInRowRight}>
                <h2>= {getValueFromLocalStorage("over")}</h2>
              </div>
            </div>

            <div className={Style.resultInRow}>
              <div className={Style.resultInRowLeft}>
                <h2>Played Over </h2>
              </div>
              <div className={Style.resultInRowRight}>
                <h2>
                  = {getValueFromLocalStorage("teambOvers")}.
                  {getValueFromLocalStorage("teambBalls")}
                </h2>
              </div>
            </div>
            <div className={Style.resultInRow}>
              <div className={Style.resultInRowLeft}>
                <h2>Score </h2>
              </div>
              <div className={Style.resultInRowRight}>
                <h2>
                  = {getValueFromLocalStorage("teambScore")}/
                  {getValueFromLocalStorage("teambWickets")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.whoWin}>
        <div className={Style.winner}>
          <p>Winner = {winner}</p>
        </div>
      </div>
    </div>
  );
}
