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

  const [currentMatchStatus, setCurrentMatchStatus] = useState(false);

  const displayHideHandler = () => {
    setHide(false);
  };

  const startMatch = () => {
    setStart(false);
    setValueInLocalStorage("teama", teamA);
    setValueInLocalStorage("teamb", teamB);
  };

  useEffect(() => {
    var currentRunningMatchCheck =
      getValueFromLocalStorage("teama") && getValueFromLocalStorage("teamb");
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
              </div>

              <div className="buttom">
                <button onClick={startMatch} className="createTeamBName">
                  Start Your Match
                </button>
              </div>
            </div>
          ) : (
            <Counter />
          )}
        </>
      )}
    </>
  );
}
