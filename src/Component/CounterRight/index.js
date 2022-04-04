import React, { useEffect, useState } from "react";
import Button from "../Button";
import Style from "./index.module.css";

import {
  getValueFromLocalStorage,
  setValueInLocalStorage,
} from "../../utils/helper";
export default function CounterRight() {
  const [teamBName, setTeamBName] = useState(0);
  const [remainingTeamBOvers, setRemainingTeamBOvers] = useState();
  const [scoreBTeam, setscoreBTeam] = useState(0);
  const [totalOversTeamB, setTotalOversTeamB] = useState(0);
  const [currentBallsTeamB, setcurrentBallsTeamB] = useState(0);
  const [teamBwickets, setteamBwickets] = useState(0);

  const teamBMatchOverHandler = () => {
    alert("MATCH OVER TEAM B");
    setValueInLocalStorage("team_b_match_over", true);
    window.location.reload();
  };

  const plus1Run = () => {
    if (totalOversTeamB + 1 === 6) {
      setTotalOversTeamB(0);
      setcurrentBallsTeamB(currentBallsTeamB + 1);
      setRemainingTeamBOvers(remainingTeamBOvers - 1);
      var remainingOversB = getValueFromLocalStorage("remaining_over_for_b");
      setValueInLocalStorage("remaining_over_for_b", remainingOversB - 1);
    } else {
      setTotalOversTeamB(totalOversTeamB + 1);
    }
    if (teamBwickets + 1 === 11) {
      teamBMatchOverHandler();
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    if (remainingTeamBOvers === 0) {
      teamBMatchOverHandler();
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    setValueInLocalStorage("teambScore", scoreBTeam + 1);
    setscoreBTeam(scoreBTeam + 1);

    setValueInLocalStorage("teambBalls", totalOversTeamB + 1);
    setValueInLocalStorage("teambOvers", currentBallsTeamB);
  };
  const plus4Run = () => {
    if (totalOversTeamB + 1 === 6) {
      setTotalOversTeamB(0);

      setcurrentBallsTeamB(currentBallsTeamB + 1);
      setRemainingTeamBOvers(remainingTeamBOvers - 1);
      var remainingOversB = getValueFromLocalStorage("remaining_over_for_b");
      setValueInLocalStorage("remaining_over_for_b", remainingOversB - 1);
    } else {
      setTotalOversTeamB(totalOversTeamB + 1);
    }
    if (teamBwickets + 1 === 11) {
      teamBMatchOverHandler();
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    if (remainingTeamBOvers === 0) {
      teamBMatchOverHandler();
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    setValueInLocalStorage("teambScore", scoreBTeam + 4);
    setscoreBTeam(scoreBTeam + 4);
    setValueInLocalStorage("teambBalls", totalOversTeamB + 1);
    setValueInLocalStorage("teambOvers", currentBallsTeamB);
  };
  const plus6Run = () => {
    if (totalOversTeamB + 1 === 6) {
      setTotalOversTeamB(0);
      setcurrentBallsTeamB(currentBallsTeamB + 1);
      setRemainingTeamBOvers(remainingTeamBOvers - 1);
      var remainingOversB = getValueFromLocalStorage("remaining_over_for_b");
      setValueInLocalStorage("remaining_over_for_b", remainingOversB - 1);
    } else {
      setTotalOversTeamB(totalOversTeamB + 1);
    }
    if (teamBwickets + 1 === 11) {
      teamBMatchOverHandler();
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    if (remainingTeamBOvers === 0) {
      teamBMatchOverHandler();
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    setValueInLocalStorage("teambScore", scoreBTeam + 6);
    setscoreBTeam(scoreBTeam + 6);
    setValueInLocalStorage("teambBalls", totalOversTeamB + 1);
    setValueInLocalStorage("teambOvers", currentBallsTeamB);
  };
  const teamBwicket = () => {
    if (totalOversTeamB + 1 === 6) {
      setTotalOversTeamB(0);

      setcurrentBallsTeamB(currentBallsTeamB + 1);
      setRemainingTeamBOvers(remainingTeamBOvers - 1);
      var remainingOversB = getValueFromLocalStorage("remaining_over_for_b");
      setValueInLocalStorage("remaining_over_for_b", remainingOversB - 1);
    } else {
      setTotalOversTeamB(totalOversTeamB + 1);
    }
    if (teamBwickets + 1 === 11) {
      teamBMatchOverHandler();
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    if (remainingTeamBOvers === 0) {
      teamBMatchOverHandler();
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    setValueInLocalStorage("teambWickets", teamBwickets + 1);
    setteamBwickets(teamBwickets + 1);
    setValueInLocalStorage("teambBalls", totalOversTeamB + 1);
    setValueInLocalStorage("teambOvers", currentBallsTeamB);
  };
  const teamBOver = () => {
    if (totalOversTeamB + 1 === 6) {
      setTotalOversTeamB(0);
      setcurrentBallsTeamB(currentBallsTeamB + 1);
      setRemainingTeamBOvers(remainingTeamBOvers - 1);
      var remainingOversB = getValueFromLocalStorage("remaining_over_for_b");
      setValueInLocalStorage("remaining_over_for_b", remainingOversB - 1);
    } else {
      setTotalOversTeamB(totalOversTeamB + 1);
    }
    if (teamBwickets + 1 === 11) {
      teamBMatchOverHandler();
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    if (remainingTeamBOvers === 0) {
      teamBMatchOverHandler();
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    setValueInLocalStorage("teambBalls", totalOversTeamB + 1);
    setValueInLocalStorage("teambOvers", currentBallsTeamB);
  };

  useEffect(() => {
    var wicketB = getValueFromLocalStorage("teambWickets");
    if (!wicketB) {
      wicketB = 0;
    }
    setteamBwickets(wicketB);
    var scoreB = getValueFromLocalStorage("teambScore");
    if (!scoreB) {
      scoreB = 0;
    }
    setscoreBTeam(scoreB);
    var overB = getValueFromLocalStorage("teambBalls");
    if (!overB) {
      overB = 0;
    }
    setTotalOversTeamB(overB);
    var ballsB = getValueFromLocalStorage("teambOvers");
    if (!ballsB) {
      ballsB = 0;
    }
    setTotalOversTeamB(ballsB);
    var remainingOversB = getValueFromLocalStorage("remaining_over_for_b");
    setRemainingTeamBOvers(+remainingOversB);

    setTotalOversTeamB(+getValueFromLocalStorage("teambBalls"));
    setcurrentBallsTeamB(+getValueFromLocalStorage("teambOvers"));
    setteamBwickets(+getValueFromLocalStorage("teambWickets"));
    setscoreBTeam(+getValueFromLocalStorage("teambScore"));
    setTeamBName(getValueFromLocalStorage("teamb"));
  }, []);
  return (
    <div className={Style.teams}>
      <h1>{teamBName}</h1>
      <div className={Style.totalScore}>
        <p className={Style.valueTeamB}>{scoreBTeam}</p>
        <p className={Style.valueTeamB}>/{teamBwickets}</p>
      </div>
      <div className={Style.buttons}>
        <div className={Style.matchSummery}>
          <div className={Style.remainingTeamAOvers}>
            <p>Remaining Over = {remainingTeamBOvers}</p>
          </div>
          <div className={Style.match}>
            <p className={Style.overs}>{currentBallsTeamB}.</p>
            <p className={Style.overs}>{totalOversTeamB}</p>
            <p className={Style.over}>overs</p>
          </div>
        </div>

        <Button action={plus1Run} buttonText="+1" />
        <Button action={plus4Run} buttonText="+4" />
        <Button action={plus6Run} buttonText="+6" />
        <Button action={teamBwicket} buttonText="Wicket" />
        <Button action={teamBOver} buttonText="No Runs" />
      </div>
    </div>
  );
}
