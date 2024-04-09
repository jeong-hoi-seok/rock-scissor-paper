import { useState } from "react";
import Score from "./components/Score";
import Button from "./components/Button";
import HandButton from "./components/HandButton";
import HandIcon from "./components/HandIcon";
import "./styles/App.css";
import "./styles/Box.css";
import { compareHand, generateRandomHand } from "./components/utils";

const INITIAL_VALUE = "rock";

const getResult = (me, other) => {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
};

const App = () => {
  const [gameHistory, setGameHistory] = useState([]);
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  const [myResult, setMyResult] = useState("");
  const [otherResult, setOtherResult] = useState("");

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) {
      setScore(score + bet);
      setMyResult("winner");
      setOtherResult("");
    }
    if (comparison < 0) {
      setOtherScore(otherScore + bet);
      setMyResult("");
      setOtherResult("winner");
    }
    if (comparison === 0) {
      setMyResult("");
      setOtherResult("");
    }
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
    setMyResult("");
    setOtherResult("");
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  const myHandIconClass = `Hand ${myResult}`;
  const otherHandIconClass = `Hand ${otherResult}`;

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <Button onClick={handleClearClick}></Button>
      <div className="App-scores">
        <Score num={score} name="나"></Score>
        <div class="App-versus">:</div>
        <Score num={otherScore} name="상대"></Score>
      </div>

      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <div className={myHandIconClass}>
              <HandIcon className="Hand-icon" value={hand} />
            </div>
            <div class="App-versus">VS</div>
            <div className={otherHandIconClass}>
              <HandIcon className="Hand-icon" value={otherHand} />
            </div>
          </div>
          <div className="App-bet">
            <span>배점</span>
            <input
              type="number"
              value={bet}
              min={1}
              max={9}
              onChange={handleBetChange}
            ></input>
          </div>
          <div className="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(", ")}</p>
          </div>
        </div>
      </div>

      <HandButton value="rock" onClick={handleButtonClick} />
      <HandButton value="scissor" onClick={handleButtonClick} />
      <HandButton value="paper" onClick={handleButtonClick} />
    </div>
  );
};

export default App;
