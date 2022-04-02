import React from "react";

import { getValueFromLocalStorage } from "../../utils/helper";
import Style from "./index.module.css";

export default function MatchResult() {
  return (
    <div className={Style.lastMatch}>
      <div className={Style.result}>
        <div className={Style.teamAResult}>
          <div className={Style.team}>
            <h3>Team A</h3>
          </div>

          <div className={Style.teamASummery}>
            <h2>Name = {getValueFromLocalStorage("teama")}</h2>
            <h2>Total Over = {getValueFromLocalStorage("over")}</h2>

            <h2>
              Remaining Over ={" "}
              {getValueFromLocalStorage("remaining_over_for_a")}
            </h2>
            <h2>
              Total Played Over = {getValueFromLocalStorage("teamaOvers")}.
              {getValueFromLocalStorage("teamaBalls")}
            </h2>
            <h2>
              {" "}
              Score = {getValueFromLocalStorage("teamaScore")}/
              {getValueFromLocalStorage("teamaWickets")}
            </h2>
          </div>
        </div>
        <div className={Style.teamBResult}>
          <div className={Style.team}>
            <h3>Team B</h3>
          </div>
          <div className={Style.teamBSummery}>
            <h2>Name = {getValueFromLocalStorage("teamb")}</h2>
            <h2>Total Over = {getValueFromLocalStorage("over")}</h2>
            <h2>
              Remaining Over ={" "}
              {getValueFromLocalStorage("remaining_over_for_b")}
            </h2>
            <h2>
              Total Played Over = {getValueFromLocalStorage("teambOvers")}.
              {getValueFromLocalStorage("teambBalls")}
            </h2>

            <h2> Score = {getValueFromLocalStorage("teambScore")}/</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
