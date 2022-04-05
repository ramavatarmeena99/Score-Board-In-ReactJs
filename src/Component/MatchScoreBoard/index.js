import React from "react";
import Style from "./index.module.css";
export default function MatchScoreBoard(props) {
  return (
    <div className={Style.teams}>
      <h1>{props.teamName}</h1>

      <div className={Style.totalScore}>
        <p className={Style.value}>{props.scoreTeam}</p>
        <p className={Style.valueTeamB}>/{props.teamwickets}</p>
      </div>
      <div className={Style.buttons}>
        <div className={Style.matchSummery}>
          <div className={Style.remainingTeamOvers}>
            <p>Remaining Over = {props.remainingTeamOvers}</p>
          </div>
          <div className={Style.match}>
            <p className={Style.overs}>{props.totalOversTeam}.</p>
            <p className={Style.overs}>{props.currentBallsTeam}</p>
            <p className={Style.over}>overs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
