import { useState } from "react";
import Style from "./index.module.css";
export default function Counter() {
  const [teamAScore, setTeamAScore] = useState(0);
  const plusOneRun = () => {
    setTeamAScore(teamAScore + 1);
  };
  const plusFourRun = () => {
    setTeamAScore(teamAScore + 4);
  };
  const PlusSixRun = () => {
    setTeamAScore(teamAScore + 6);
  };
  const resetTeamAScore = () => {
    setTeamAScore(0);
  };
  const [teamBScore, setTeamBScore] = useState(0);
  const plus1Run = () => {
    setTeamBScore(teamBScore + 1);
  };
  const plus4Run = () => {
    setTeamBScore(teamBScore + 4);
  };
  const Plus6Run = () => {
    setTeamBScore(teamBScore + 6);
  };
  const resetTeamBScore = () => {
    setTeamBScore(0);
  };
  return (
    <div className={Style.counter}>
      <div className={Style.CounterApp}>
        <h1>Counter Match App</h1>
      </div>
      <div className={Style.matchScore}>
        <div className={Style.left}>
          <div className={Style.teams}>
            <h1>Team-A</h1>
            <div className={Style.totalScore}>
              {/* <p>Score =</p> */}
              <p className={Style.value}>{teamAScore}</p>
            </div>
            <div className={Style.buttons}>
              <button onClick={plusOneRun}>+1</button>
              <button onClick={plusFourRun}>+4</button>
              <button onClick={PlusSixRun}>+6</button>
              <button onClick={resetTeamAScore}>Reset</button>

            </div>
          </div>
        </div>
        <div className={Style.right}>
          <div className={Style.teams}>
            <h1>Team-B</h1>
            <div className={Style.totalScore}>
              {/* <p>Score =</p> */}
              <p className={Style.valueTeamB}>{teamBScore}</p>
            </div>
            <div className={Style.buttons}>
              <button onClick={plus1Run}>+1</button>
              <button onClick={plus4Run}>+4</button>
              <button onClick={Plus6Run}>+6</button>
              <button onClick={resetTeamBScore}>Reset</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
