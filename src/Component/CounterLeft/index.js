import React, { useEffect, useState } from "react";
import {
  getValueFromLocalStorage,
  setValueInLocalStorage,
} from "../../utils/helper";
import Style from "./index.module.css";
import Button from "../Button";

import MatchScoreBoard from "../MatchScoreBoard";
export default function CounterLeft() {
  const [teamAName, setTeamAName] = useState(0);
  const [teamAwickets, setteamAwickets] = useState(0);
  const [remainingTeamAOvers, setRemainingTeamAOvers] = useState();
  const [scoreATeam, setscoreATeam] = useState(0);
  const [totalOversTeamA, setTotalOversTeamA] = useState(0);
  const [currentBallsTeamA, setcurrentBallsTeamA] = useState(0);

  const teamAMatchOverHandler = () => {
    alert("MATCH OVER TEAM A");
    setValueInLocalStorage("team_a_match_over", true);
    window.location.reload();
  };

  const plusOneRun = () => {
    if (totalOversTeamA + 1 === 6) {
      setTotalOversTeamA(0);
      setcurrentBallsTeamA(currentBallsTeamA + 1);
      setRemainingTeamAOvers(remainingTeamAOvers - 1);
      var remainingOversA = getValueFromLocalStorage("remaining_over_for_a");
      setValueInLocalStorage("remaining_over_for_a", remainingOversA - 1);
    } else {
      setTotalOversTeamA(totalOversTeamA + 1);
    }

    if (teamAwickets + 1 === 11) {
      teamAMatchOverHandler();
      setcurrentBallsTeamA(currentBallsTeamA);

      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    if (remainingTeamAOvers === 0) {
      teamAMatchOverHandler();
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    setValueInLocalStorage("teamaScore", scoreATeam + 1);
    setscoreATeam(scoreATeam + 1);
    setValueInLocalStorage("teamaBalls", totalOversTeamA + 1);
    setValueInLocalStorage("teamaOvers", currentBallsTeamA);
  };
  const plusFourRun = () => {
    if (totalOversTeamA + 1 === 6) {
      setTotalOversTeamA(0);
      setcurrentBallsTeamA(currentBallsTeamA + 1);
      setRemainingTeamAOvers(remainingTeamAOvers - 1);
      var remainingOversA = getValueFromLocalStorage("remaining_over_for_a");
      setValueInLocalStorage("remaining_over_for_a", remainingOversA - 1);
    } else {
      setTotalOversTeamA(totalOversTeamA + 1);
    }
    if (teamAwickets + 1 === 11) {
      teamAMatchOverHandler();
      setcurrentBallsTeamA(currentBallsTeamA);

      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    if (remainingTeamAOvers === 0) {
      teamAMatchOverHandler();
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    setValueInLocalStorage("teamaScore", scoreATeam + 4);
    setscoreATeam(scoreATeam + 4);

    setValueInLocalStorage("teamaBalls", totalOversTeamA + 1);
    setValueInLocalStorage("teamaOvers", currentBallsTeamA);
  };
  const plusSixRun = () => {
    if (totalOversTeamA + 1 === 6) {
      setTotalOversTeamA(0);
      setcurrentBallsTeamA(currentBallsTeamA + 1);
      setRemainingTeamAOvers(remainingTeamAOvers - 1);
      var remainingOversA = getValueFromLocalStorage("remaining_over_for_a");
      setValueInLocalStorage("remaining_over_for_a", remainingOversA - 1);
    } else {
      setTotalOversTeamA(totalOversTeamA + 1);
    }
    if (teamAwickets + 1 === 11) {
      teamAMatchOverHandler();
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    if (remainingTeamAOvers === 0) {
      teamAMatchOverHandler();
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    setValueInLocalStorage("teamaScore", scoreATeam + 6);
    setscoreATeam(scoreATeam + 6);

    setValueInLocalStorage("teamaBalls", totalOversTeamA + 1);
    setValueInLocalStorage("teamaOvers", currentBallsTeamA);
  };
  const teamAwicket = () => {
    if (totalOversTeamA + 1 === 6) {
      setTotalOversTeamA(0);
      setcurrentBallsTeamA(currentBallsTeamA + 1);
      setRemainingTeamAOvers(remainingTeamAOvers - 1);
      var remainingOversA = getValueFromLocalStorage("remaining_over_for_a");
      setValueInLocalStorage("remaining_over_for_a", remainingOversA - 1);
    } else {
      setTotalOversTeamA(totalOversTeamA + 1);
    }
    if (teamAwickets + 1 === 11) {
      teamAMatchOverHandler();
      setcurrentBallsTeamA(currentBallsTeamA);

      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    if (remainingTeamAOvers === 0) {
      teamAMatchOverHandler();
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    setValueInLocalStorage("teamaWickets", teamAwickets + 1);
    setteamAwickets(teamAwickets + 1);
    setValueInLocalStorage("teamaBalls", totalOversTeamA + 1);
    setValueInLocalStorage("teamaOvers", currentBallsTeamA);
  };
  const teamAOver = () => {
    if (totalOversTeamA + 1 === 6) {
      setTotalOversTeamA(0);
      setcurrentBallsTeamA(currentBallsTeamA + 1);
      setRemainingTeamAOvers(remainingTeamAOvers - 1);
      var remainingOversA = getValueFromLocalStorage("remaining_over_for_a");
      setValueInLocalStorage("remaining_over_for_a", remainingOversA - 1);
    } else {
      setTotalOversTeamA(totalOversTeamA + 1);
    }
    if (teamAwickets + 1 === 11) {
      teamAMatchOverHandler();
      setcurrentBallsTeamA(currentBallsTeamA);

      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    if (remainingTeamAOvers === 0) {
      teamAMatchOverHandler();
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    setValueInLocalStorage("teamaBalls", totalOversTeamA + 1);
    setValueInLocalStorage("teamaOvers", currentBallsTeamA);
  };

  useEffect(() => {
    var scoreA = +getValueFromLocalStorage("teamaScore");
    if (!scoreA) {
      scoreA = 0;
    }
    setscoreATeam(scoreA);

    var wicketA = +getValueFromLocalStorage("teamaWickets");
    if (!wicketA) {
      wicketA = 0;
    }
    setteamAwickets(wicketA);

    var overA = +getValueFromLocalStorage("teamaBalls");
    if (!overA) {
      overA = 0;
    }
    setTotalOversTeamA(overA);

    var ballsA = +getValueFromLocalStorage("teamaOvers");
    if (!ballsA) {
      ballsA = 0;
    }
    setTotalOversTeamA(ballsA);

    var remainingOversA = +getValueFromLocalStorage("remaining_over_for_a");

    setRemainingTeamAOvers(+remainingOversA);

    setTeamAName(getValueFromLocalStorage("teama"));
    setscoreATeam(+getValueFromLocalStorage("teamaScore"));
    setteamAwickets(+getValueFromLocalStorage("teamaWickets"));
    setTotalOversTeamA(+getValueFromLocalStorage("teamaBalls"));
    setcurrentBallsTeamA(+getValueFromLocalStorage("teamaOvers"));
  }, []);
  return (
    <>
      <MatchScoreBoard
        teamName={teamAName}
        scoreTeam={scoreATeam}
        teamwickets={teamAwickets}
        remainingTeamOvers={remainingTeamAOvers}
        currentBallsTeam={totalOversTeamA}
        totalOversTeam={currentBallsTeamA}
      />
      <div className={Style.teams}>
        <Button action={plusOneRun} buttonText="+1" />
        <Button action={plusFourRun} buttonText="+4" />
        <Button action={plusSixRun} buttonText="+6" />
        <Button action={teamAwicket} buttonText="Wicket" />
        <Button action={teamAOver} buttonText="No Runs" />
      </div>
    </>
  );
}
