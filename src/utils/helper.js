export const setValueInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getValueFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeValueFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const editMatchHandlerFromUtils = () => {
  getValueFromLocalStorage("teama");
  getValueFromLocalStorage("teamb");

  setValueInLocalStorage("isEdit", true);
  setValueInLocalStorage("team_a_match_over", false);

  setValueInLocalStorage("teamaScore", "");

  setValueInLocalStorage("teamaBalls", "");

  setValueInLocalStorage("teamaWickets", "");

  setValueInLocalStorage("teamaOvers", "");

  setValueInLocalStorage(
    "remaining_over_for_a",
    getValueFromLocalStorage("over")
  );
  setValueInLocalStorage("team_b_match_over", false);

  setValueInLocalStorage("teambScore", "");

  setValueInLocalStorage("teambBalls", "");

  setValueInLocalStorage("teambWickets", "");

  setValueInLocalStorage("teambOvers", "");

  setValueInLocalStorage(
    "remaining_over_for_b",
    getValueFromLocalStorage("over")
  );

  window.location.reload();
};

export const resetMatchHandelrFromUtils = () => {
  setValueInLocalStorage("team_a_match_over", false);

  setValueInLocalStorage("teamaScore", 0);

  setValueInLocalStorage("teamaBalls", 0);

  setValueInLocalStorage("teamaWickets", 0);

  setValueInLocalStorage("teamaOvers", 0);

  setValueInLocalStorage(
    "remaining_over_for_a",
    +getValueFromLocalStorage("over")
  );
  setValueInLocalStorage("team_b_match_over", false);

  setValueInLocalStorage("teambScore", 0);

  setValueInLocalStorage("teambBalls", 0);

  setValueInLocalStorage("teambWickets", 0);

  setValueInLocalStorage("teambOvers", 0);

  setValueInLocalStorage(
    "remaining_over_for_b",
    +getValueFromLocalStorage("over")
  );

  window.location.reload();
};
