import { useEffect, useState } from "react";
import {
  getValueFromLocalStorage,
  setValueInLocalStorage,
} from "../../utils/helper";

import Button from "../Button";
import CounterMatch from "../CounterMatch";
import Style from "./index.module.css";
export default function Counter() {
  const [teamAName, setTeamAName] = useState(0);
  const [teamBName, setTeamBName] = useState(0);
  const [teamAwickets, setteamAwickets] = useState(0);
  const [teamBwickets, setteamBwickets] = useState(0);
  const [remainingTeamAOvers, setRemainingTeamAOvers] = useState();
  const [remainingTeamBOvers, setRemainingTeamBOvers] = useState();
  const [scoreATeam, setscoreATeam] = useState(0);
  const [scoreBTeam, setscoreBTeam] = useState(0);
  const [totalOversTeamA, setTotalOversTeamA] = useState(0);
  const [totalOversTeamB, setTotalOversTeamB] = useState(0);
  const [currentBallsTeamA, setcurrentBallsTeamA] = useState(0);
  const [currentBallsTeamB, setcurrentBallsTeamB] = useState(0);

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
      alert("Match Over");
      setcurrentBallsTeamA(currentBallsTeamA);

      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    if (remainingTeamAOvers === 0) {
      alert("Match Over");
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    setValueInLocalStorage("teamaScore", scoreATeam + 1);
    setscoreATeam(scoreATeam + 1);
    setValueInLocalStorage("teamaOvers", totalOversTeamA + 1);
    setValueInLocalStorage("teamaBalls", currentBallsTeamA);
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
      alert("Match Over");
      setcurrentBallsTeamA(currentBallsTeamA);

      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    if (remainingTeamAOvers === 0) {
      alert("Match Over");
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    setValueInLocalStorage("teamaScore", scoreATeam + 4);
    setscoreATeam(scoreATeam + 4);

    setValueInLocalStorage("teamaOvers", totalOversTeamA + 1);
    setValueInLocalStorage("teamaBalls", currentBallsTeamA);
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
      // setTotalOversTeamA(totalOversTeamA + 1);
    }
    if (teamAwickets + 1 === 11) {
      alert("Match Over");
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    if (remainingTeamAOvers === 0) {
      alert("Match Over");
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    setValueInLocalStorage("teamaScore", scoreATeam + 6);
    setscoreATeam(scoreATeam + 6);

    setValueInLocalStorage("teamaOvers", totalOversTeamA + 1);
    setValueInLocalStorage("teamaBalls", currentBallsTeamA);
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
      alert("Match Over");
      setcurrentBallsTeamA(currentBallsTeamA);

      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    if (remainingTeamAOvers === 0) {
      alert("Match Over");
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    setValueInLocalStorage("teamaWickets", teamAwickets + 1);
    setteamAwickets(teamAwickets + 1);
    setValueInLocalStorage("teamaOvers", totalOversTeamA + 1);
    setValueInLocalStorage("teamaBalls", currentBallsTeamA);
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
      alert("Match Over");
      setcurrentBallsTeamA(currentBallsTeamA);

      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    if (remainingTeamAOvers === 0) {
      alert("Match Over");
      setcurrentBallsTeamA(currentBallsTeamA);
      setTotalOversTeamA(totalOversTeamA);
      return;
    }
    setValueInLocalStorage("teamaOvers", totalOversTeamA + 1);
    setValueInLocalStorage("teamaBalls", currentBallsTeamA);
  };

  const resetTeamAScore = () => {
    setValueInLocalStorage("teamaScore", 0);
    setscoreATeam(0);

    setValueInLocalStorage("teamaOvers", 0);
    setTotalOversTeamA(0);

    setValueInLocalStorage("teamaWickets", 0);
    setteamAwickets(0);
    setValueInLocalStorage("teamaBalls", 0);
    setcurrentBallsTeamA(0);
    setRemainingTeamAOvers(getValueFromLocalStorage("over"));
    setValueInLocalStorage(
      "remaining_over_for_a",
      getValueFromLocalStorage("over")
    );
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
      alert("Match Over");
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    if (remainingTeamBOvers === 0) {
      alert("Match Over");
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    setValueInLocalStorage("teambScore", scoreBTeam + 1);
    setscoreBTeam(scoreBTeam + 1);

    setValueInLocalStorage("teambOvers", totalOversTeamB + 1);
    setValueInLocalStorage("teambBalls", currentBallsTeamB);
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
      alert("Match Over");
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    if (remainingTeamBOvers === 0) {
      alert("Match Over");
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    setValueInLocalStorage("teambScore", scoreBTeam + 4);
    setscoreBTeam(scoreBTeam + 4);
    setValueInLocalStorage("teambOvers", totalOversTeamB + 1);
    setValueInLocalStorage("teambBalls", currentBallsTeamB);
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
      alert("Match Over");
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    if (remainingTeamBOvers === 0) {
      alert("Match Over");
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    setValueInLocalStorage("teambScore", scoreBTeam + 6);
    setscoreBTeam(scoreBTeam + 6);
    setValueInLocalStorage("teambOvers", totalOversTeamB + 1);
    setValueInLocalStorage("teambBalls", currentBallsTeamB);
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
      alert("Match Over");
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    if (remainingTeamBOvers === 0) {
      alert("Match Over");
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    setValueInLocalStorage("teambWickets", teamBwickets + 1);
    setteamBwickets(teamBwickets + 1);
    setValueInLocalStorage("teambOvers", totalOversTeamB + 1);
    setValueInLocalStorage("teambBalls", currentBallsTeamB);
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
      alert("Match Over");
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    if (remainingTeamBOvers === 0) {
      alert("Match Over");
      setcurrentBallsTeamB(currentBallsTeamB);
      setTotalOversTeamB(totalOversTeamB);
      return;
    }
    setValueInLocalStorage("teambOvers", totalOversTeamB + 1);
    setValueInLocalStorage("teambBalls", currentBallsTeamB);
  };
  const resetTeamBScore = () => {
    setValueInLocalStorage("teambScore", 0);
    setscoreBTeam(0);

    setValueInLocalStorage("teambOvers", 0);
    setTotalOversTeamB(0);

    setValueInLocalStorage("teambWickets", 0);
    setteamBwickets(0);
    setValueInLocalStorage("teambBalls", 0);
    setcurrentBallsTeamB(0);
    setValueInLocalStorage("remaining_over_for_b", 0);
    setRemainingTeamBOvers(getValueFromLocalStorage("over"));
    setValueInLocalStorage(
      "remaining_over_for_b",
      getValueFromLocalStorage("over")
    );
  };
  const [stay, setStay] = useState(true);
  const endMatch = () => {
    localStorage.clear();
    setStay(false);
  };

  useEffect(() => {
    var scoreA = getValueFromLocalStorage("teamaScore");
    if (!scoreA) {
      scoreA = 0;
    }
    setscoreATeam(scoreA);
    var scoreB = getValueFromLocalStorage("teambScore");
    if (!scoreB) {
      scoreB = 0;
    }
    setscoreBTeam(scoreB);
    var wicketA = getValueFromLocalStorage("teamaWickets");
    if (!wicketA) {
      wicketA = 0;
    }
    setteamAwickets(wicketA);
    var wicketB = getValueFromLocalStorage("teambWickets");
    if (!wicketB) {
      scoreB = 0;
    }
    setteamBwickets(wicketB);

    var overA = getValueFromLocalStorage("teamaOvers");
    if (!overA) {
      overA = 0;
    }
    setTotalOversTeamA(overA);
    var overB = getValueFromLocalStorage("teambOvers");
    if (!overB) {
      overB = 0;
    }
    setTotalOversTeamB(overB);
    var ballsA = getValueFromLocalStorage("teamaBalls");
    if (!ballsA) {
      ballsA = 0;
    }
    setTotalOversTeamB(ballsA);
    var ballsB = getValueFromLocalStorage("teambBalls");
    if (!ballsB) {
      ballsB = 0;
    }
    setTotalOversTeamB(ballsB);
    var remainingOversA = getValueFromLocalStorage("remaining_over_for_a");

    var remainingOversB = getValueFromLocalStorage("remaining_over_for_b");

    // if (!remainingOversA) {
    //   remainingOversA = getValueFromLocalStorage("remaining_over_for_a");
    // }

    setRemainingTeamAOvers(+remainingOversA);
    setRemainingTeamBOvers(+remainingOversB);

    setTeamAName(getValueFromLocalStorage("teama"));
    setTeamBName(getValueFromLocalStorage("teamb"));
    setscoreATeam(+getValueFromLocalStorage("teamaScore"));
    setscoreBTeam(+getValueFromLocalStorage("teambScore"));
    setteamAwickets(+getValueFromLocalStorage("teamaWickets"));
    setteamBwickets(+getValueFromLocalStorage("teambWickets"));
    setTotalOversTeamA(+getValueFromLocalStorage("teamaOvers"));
    setTotalOversTeamB(+getValueFromLocalStorage("teambOvers"));
    setcurrentBallsTeamA(+getValueFromLocalStorage("teamaBalls"));
    setcurrentBallsTeamB(+getValueFromLocalStorage("teambBalls"));
  }, []);

  return (
    <>
      {stay ? (
        <div className={Style.counter}>
          <h5>Total Overs ={getValueFromLocalStorage("over")}</h5>

          <div className={Style.matchScore}>
            <div className={Style.left}>
              <div className={Style.teams}>
                <h1>{teamAName}</h1>
                <div className={Style.totalScore}>
                  {/* <p>Score =</p> */}
                  <p className={Style.value}>{scoreATeam}</p>
                  <p className={Style.valueTeamB}>/{teamAwickets}</p>
                </div>
                <div className={Style.buttons}>
                  <div className={Style.matchSummery}>
                    <div className={Style.remainingTeamAOvers}>
                      <p>Remaining Over ={remainingTeamAOvers}</p>
                    </div>
                    <div className={Style.match}>
                      <p className={Style.overs}>{currentBallsTeamA}.</p>
                      <p className={Style.overs}>{totalOversTeamA}</p>
                      <p className={Style.over}>overs</p>
                    </div>
                  </div>

                  <Button action={plusOneRun} buttonText="+1" />
                  <Button action={plusFourRun} buttonText="+4" />
                  <Button action={plusSixRun} buttonText="+6" />
                  <Button action={teamAwicket} buttonText="Wicket" />
                  <Button action={teamAOver} buttonText="No Runs" />
                  <Button action={resetTeamAScore} buttonText="Reset ccc" />
                </div>
              </div>
            </div>
            <div className={Style.right}>
              <div className={Style.teams}>
                <h1>{teamBName}</h1>
                <div className={Style.totalScore}>
                  <p className={Style.valueTeamB}>{scoreBTeam}</p>
                  <p className={Style.valueTeamB}>/{teamBwickets}</p>
                </div>
                <div className={Style.buttons}>
                  <div className={Style.matchSummery}>
                    <div className={Style.remainingTeamAOvers}>
                      <p>Remaining Over ={remainingTeamBOvers}</p>
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
                  <Button action={resetTeamBScore} buttonText="Reset" />
                </div>
              </div>
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
