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
    } else {
      setTotalOversTeamA(totalOversTeamA + 1);
    }

    setValueInLocalStorage("teamaScore", scoreATeam + 1);
    setscoreATeam(scoreATeam + 1);
    setValueInLocalStorage("teamaOvers", totalOversTeamA + 1);
  };
  const plusFourRun = () => {
    if (totalOversTeamA + 1 === 6) {
      setTotalOversTeamA(0);
      setcurrentBallsTeamA(currentBallsTeamA + 1);
    } else {
      setTotalOversTeamA(totalOversTeamA + 1);
    }
    setValueInLocalStorage("teamaScore", scoreATeam + 4);
    setscoreATeam(scoreATeam + 4);

    setValueInLocalStorage("teamaOvers", totalOversTeamA + 1);
  };
  const plusSixRun = () => {
    if (totalOversTeamA + 1 === 6) {
      setTotalOversTeamA(0);
      setcurrentBallsTeamA(currentBallsTeamA + 1);
    } else {
      setTotalOversTeamA(totalOversTeamA + 1);
    }
    setValueInLocalStorage("teamaScore", scoreATeam + 6);
    setscoreATeam(scoreATeam + 6);

    setValueInLocalStorage("teamaOvers", totalOversTeamA + 1);
  };
  const teamAwicket = () => {
    if (totalOversTeamA + 1 === 6) {
      setTotalOversTeamA(0);
      setcurrentBallsTeamA(currentBallsTeamA + 1);
    } else {
      setTotalOversTeamA(totalOversTeamA + 1);
    }
    setValueInLocalStorage("teamaWickets", teamAwickets + 1);
    setteamAwickets(teamAwickets + 1);
    setValueInLocalStorage("teamaOvers", totalOversTeamA + 1);
  };
  const teamAOver = () => {
    if (totalOversTeamA + 1 === 6) {
      setTotalOversTeamA(0);
      setcurrentBallsTeamA(currentBallsTeamA + 1);
    } else {
      setTotalOversTeamA(totalOversTeamA + 1);
    }
    setValueInLocalStorage("teamaOvers", totalOversTeamA + 1);
  };

  const resetTeamAScore = () => {
    setValueInLocalStorage("teamaScore", 0);
    setscoreATeam(0);

    setValueInLocalStorage("teambOvers", 0);
    setTotalOversTeamA(0);

    setValueInLocalStorage("teamaWickets", 0);
    setteamAwickets(0);

    setcurrentBallsTeamA(0);
  };

  const plus1Run = () => {
    if (totalOversTeamB + 1 === 6) {
      setTotalOversTeamB(0);
      setcurrentBallsTeamB(currentBallsTeamB + 1);
    } else {
      setTotalOversTeamB(totalOversTeamB + 1);
    }
    setValueInLocalStorage("teambScore", scoreBTeam + 1);
    setscoreBTeam(scoreBTeam + 1);

    setValueInLocalStorage("teambOvers", totalOversTeamB + 1);
  };
  const plus4Run = () => {
    if (totalOversTeamB + 1 === 6) {
      setTotalOversTeamB(0);

      setcurrentBallsTeamB(currentBallsTeamB + 1);
    } else {
      setTotalOversTeamB(totalOversTeamB + 1);
    }
    setValueInLocalStorage("teambScore", scoreBTeam + 4);
    setscoreBTeam(scoreBTeam + 4);
    setValueInLocalStorage("teambOvers", totalOversTeamB + 1);
  };
  const plus6Run = () => {
    if (totalOversTeamB + 1 === 6) {
      setTotalOversTeamB(0);
      setcurrentBallsTeamB(currentBallsTeamB + 1);
    } else {
      setTotalOversTeamB(totalOversTeamB + 1);
    }
    setValueInLocalStorage("teambScore", scoreBTeam + 6);
    setscoreBTeam(scoreBTeam + 6);
    setValueInLocalStorage("teambOvers", totalOversTeamB + 1);
  };
  const teamBwicket = () => {
    if (totalOversTeamB + 1 === 6) {
      setTotalOversTeamB(0);

      setcurrentBallsTeamB(currentBallsTeamB + 1);
    } else {
      setTotalOversTeamB(totalOversTeamB + 1);
    }
    setValueInLocalStorage("teambWickets", teamBwickets + 1);
    setteamBwickets(teamBwickets + 1);
    setValueInLocalStorage("teambOvers", totalOversTeamB + 1);
  };
  const teamBOver = () => {
    if (totalOversTeamB + 1 === 6) {
      setTotalOversTeamB(0);
      setcurrentBallsTeamB(currentBallsTeamB + 1);
    } else {
      setTotalOversTeamB(totalOversTeamB + 1);
    }
    setValueInLocalStorage("teambOvers", totalOversTeamB + 1);
  };
  const resetTeamBScore = () => {
    setValueInLocalStorage("teambScore", 0);
    setscoreBTeam(0);

    setValueInLocalStorage("teambOvers", 0);
    setTotalOversTeamB(0);

    setValueInLocalStorage("teambWickets", 0);
    setteamBwickets(0);

    setcurrentBallsTeamB(0);
  };
  const [stay, setStay] = useState(true);
  const endMatch = () => {
    setValueInLocalStorage("teama", "");
    setValueInLocalStorage("teamb", "");
    setValueInLocalStorage("teamaScore", "");
    setValueInLocalStorage("teambScore", "");
    setValueInLocalStorage("teamaWickets", "");
    setValueInLocalStorage("teambWickets", "");
    setValueInLocalStorage("teamaOvers", "");
    setValueInLocalStorage("teambOvers", "");
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

    setTeamAName(getValueFromLocalStorage("teama"));
    setTeamBName(getValueFromLocalStorage("teamb"));
    setscoreATeam(+getValueFromLocalStorage("teamaScore"));
    setscoreBTeam(+getValueFromLocalStorage("teambScore"));
    setteamAwickets(+getValueFromLocalStorage("teamaWickets"));
    setteamBwickets(+getValueFromLocalStorage("teambWickets"));
    setTotalOversTeamA(+getValueFromLocalStorage("teamaOvers"));
    setTotalOversTeamB(+getValueFromLocalStorage("teambOvers"));
  }, []);

  return (
    <>
      {stay ? (
        <div className={Style.counter}>
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
                    <p className={Style.overs}>{currentBallsTeamA}.</p>
                    <p className={Style.overs}>{totalOversTeamA} overs</p>
                  </div>

                  <Button action={plusOneRun} buttonText="+1" />
                  <Button action={plusFourRun} buttonText="+4" />
                  <Button action={plusSixRun} buttonText="+6" />
                  <Button action={teamAwicket} buttonText="Wicket" />
                  <Button action={teamAOver} buttonText="No Runs" />
                  <Button action={resetTeamAScore} buttonText="Reset" />
                </div>
              </div>
            </div>
            <div className={Style.right}>
              <div className={Style.teams}>
                <h1>{teamBName}</h1>
                <div className={Style.totalScore}>
                  {/* <p>Score =</p> */}
                  <p className={Style.valueTeamB}>{scoreBTeam}</p>
                  <p className={Style.valueTeamB}>/{teamBwickets}</p>
                </div>
                <div className={Style.buttons}>
                  <div className={Style.matchSummery}>
                    <p className={Style.overs}>{currentBallsTeamB}.</p>
                    <p className={Style.overs}>{totalOversTeamB} overs</p>
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
          <Button action={endMatch} buttonText="End Match" />
        </div>
      ) : (
        <CounterMatch />
      )}
    </>
  );
}
