import React, { useEffect, useState } from "react";
import Counter from "../Counter";
import Button from "../Button";
import {
  getValueFromLocalStorage,
  setValueInLocalStorage,
} from "../../utils/helper";

export default function CounterMatch() {
  const [hide, setHide] = useState(true);
  const [start, setStart] = useState(true);
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [overs, setOvers] = useState("");

  const [currentMatchStatus, setCurrentMatchStatus] = useState(false);

  const displayHideHandler = () => {
    setHide(false);
  };

  const startMatch = () => {
    setValueInLocalStorage("teama", teamA);
    setValueInLocalStorage("teamb", teamB);
    setValueInLocalStorage("over", overs);
    setValueInLocalStorage("remaining_over_for_a", overs);
    setValueInLocalStorage("remaining_over_for_b", overs);
    if (getValueFromLocalStorage("teama", teamA) === "") {
      alert("please Enter Team A Name");

      return;
    }
    if (getValueFromLocalStorage("teamb", teamB) === "") {
      alert("please Enter Team B Name");

      return;
    }
    if (getValueFromLocalStorage("over", overs) === "") {
      alert("please Enter Overs");
      return;
    }
    setStart(false);
  };

  useEffect(() => {
    var currentRunningMatchCheck =
      getValueFromLocalStorage("teama") &&
      getValueFromLocalStorage("teamb") &&
      getValueFromLocalStorage("over");
    setCurrentMatchStatus(currentRunningMatchCheck);
  }, []);

  return (
    <>
      {hide && !currentMatchStatus ? (
        <div className="createMatch">
          <Button
            buttonText="Create a match"
            action={() => displayHideHandler()}
          />
        </div>
      ) : (
        <>
          {start && !currentMatchStatus ? (
            <div className="underContainer">
              <div className="createTeams">
                <input
                  onChange={(e) => setTeamA(e.target.value)}
                  value={teamA}
                  placeholder="Enter Team A Name"
                  type={"text"}
                />

                <input
                  onChange={(e) => setTeamB(e.target.value)}
                  value={teamB}
                  placeholder="Enter Team B Name"
                  type={"text"}
                />

                <input
                  onChange={(e) => setOvers(e.target.value)}
                  value={overs}
                  placeholder="Enter Overs"
                  type={"text"}
                />
              </div>

              <div className="buttom">
                <button onClick={startMatch} className="createTeamBName">
                  Start Your Match
                </button>
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
