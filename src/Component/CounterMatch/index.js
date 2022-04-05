import React, { useEffect, useState } from "react";
import Counter from "../Counter";
import Button from "../Button";
import {
  getValueFromLocalStorage,
  setValueInLocalStorage,
} from "../../utils/helper";
import Style from "./index.module.css";
export default function CounterMatch() {
  const [hide, setHide] = useState(true);
  const [start, setStart] = useState(true);
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [overs, setOvers] = useState("");
  const [showTeamA, setShowTeamA] = useState(null);
  const [showTeamB, setShowTeamB] = useState(null);
  const [showOver, setShowOver] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [currentMatchStatus, setCurrentMatchStatus] = useState(false);

  const displayHideHandler = () => {
    setHide(false);
  };

  const startMatch = () => {
    setValueInLocalStorage("isEdit", false);

    setValueInLocalStorage("teama", teamA);
    setValueInLocalStorage("teamb", teamB);
    setValueInLocalStorage("over", overs);
    setValueInLocalStorage("remaining_over_for_a", overs);
    setValueInLocalStorage("remaining_over_for_b", overs);
    if (getValueFromLocalStorage("teama", teamA) === "") {
      setShowTeamA(true);
      setIsEdit(false);
      setTimeout(() => {
        setShowTeamA(false);
      }, 2000);
      return () => {
        clearTimeout(showTeamA);
      };
    }
    if (getValueFromLocalStorage("teamb", teamB) === "") {
      setShowTeamB(true);
      setIsEdit(false);

      setTimeout(() => {
        setShowTeamB(false);
      }, 2000);
      return () => {
        clearTimeout(showTeamB);
      };
    }
    if (getValueFromLocalStorage("over", overs) === "") {
      setShowOver(true);
      setIsEdit(false);

      setTimeout(() => {
        setShowOver(false);
      }, 2000);
      return () => {
        clearTimeout(showOver);
      };
    }
    setStart(false);
    window.location.reload();
  };

  useEffect(() => {
    var currentRunningMatchCheck =
      getValueFromLocalStorage("teama") &&
      getValueFromLocalStorage("teamb") &&
      getValueFromLocalStorage("over");
    setIsEdit(getValueFromLocalStorage("isEdit"));
    setCurrentMatchStatus(currentRunningMatchCheck);

    setTeamA(getValueFromLocalStorage("teama"));
    setTeamB(getValueFromLocalStorage("teamb"));
    setOvers(getValueFromLocalStorage("over"));
  }, []);

  return (
    <>
      {hide && !currentMatchStatus ? (
        <div className="createMatch">
          <div className={Style.clickCreateMatch}>
            <Button
              buttonText="Create a match"
              action={() => displayHideHandler()}
            />
          </div>
        </div>
      ) : (
        <>
          {(start && !currentMatchStatus) || isEdit ? (
            <div className="underContainer">
              <div className="createTeams">
                <div className={Style.inputField}>
                  <input
                    onChange={(e) => setTeamA(e.target.value)}
                    value={teamA}
                    placeholder="Enter Team A Name"
                    type={"text"}
                  />
                  <div className={Style.alert}>
                    {showTeamA ? <h3>*Please Enter Team A Name*</h3> : null}
                  </div>

                  <input
                    onChange={(e) => setTeamB(e.target.value)}
                    value={teamB}
                    placeholder="Enter Team B Name"
                    type={"text"}
                  />
                  <div className={Style.alert}>
                    {showTeamB ? <h3>*Please Enter Team B Name*</h3> : null}
                  </div>

                  <input
                    onChange={(e) => setOvers(e.target.value)}
                    value={overs}
                    placeholder="Enter Overs"
                    type={"number"}
                  />
                </div>
                <div className={Style.alert}>
                  {showOver ? <h3>*Please Enter Over*</h3> : null}
                </div>

                <div className={Style.note}>
                  <p>Note: You have to play as many overs as you have chosen</p>
                </div>
              </div>

              <div className="buttom">
                <div className={Style.clickButtom}>
                  <button onClick={startMatch} className="createTeamBName">
                    Start Your Match
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Counter overs={overs} />
          )}
        </>
      )}
    </>
  );
}
