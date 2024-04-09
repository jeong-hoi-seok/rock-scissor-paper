import { useState } from "react";
//css
import "./styles/App.css";
import "./styles/Box.css";
//utils
import { compareHand, generateRandomHand } from "./utils";
//components
import Score from "./components/Score/Score";
import Button from "./components/Button";
import HandButton from "./components/HandButton/HandButton";
import HandIcon from "./components/HandIcon/HandIcon";

const INITIAL_VALUE = {
  hand: "rock",
  score: 0,
};

const App = () => {
  const [gameHistory, setGameHistory] = useState([]); //게임 기록
  const [me, setMe] = useState(INITIAL_VALUE); //나
  const [you, setYou] = useState(INITIAL_VALUE); //상대
  const [bet, setBet] = useState(1); //배점

  const result = gameHistory?.[gameHistory.length - 1];

  //가위바위보 실행 함수
  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand(); //상대가 낸 손
    const comparison = compareHand(nextHand, nextOtherHand); //결과값 -1, 0, 1
    const comparisonText = (comparison === 0) ? '무승부' : (comparison > 0) ? '승리' : '패배'

    const update = (prev, hand, negative = 1) => {
      return {
        ...prev,
        hand,
        score: + prev.score + (Math.max((negative * comparison), 0) * bet)
      }
    }

    //내 상태 값 업데이트
    setMe((prev) => update(prev, nextHand));
    //상대 상태 값 업데이트
    setYou((prev) => update(prev, nextOtherHand, -1));
    //게임 기록 업데이트
    setGameHistory([...gameHistory, comparisonText]);
  };

  //가위바위보 리셋
  const handleClearClick = () => {
    setGameHistory([]);
    setMe(INITIAL_VALUE);
    setYou(INITIAL_VALUE);
    setBet(1);
  };

  //배점 업데이트
  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    num < 1 ? num = 1 : num %= 10;
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <section className="App">
      <h1 className="App-heading">가위바위보</h1>
      <Button onClick={handleClearClick}></Button>
      <div className="App-scores">
        <Score num={me.score} name="나"></Score>
        <div className="App-versus">:</div>
        <Score num={you.score} name="상대"></Score>
      </div>

      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <div className={`Hand ${result === '승리' ? 'winner' : ''}`}>
              <HandIcon className='Hand-icon' value={me.hand} />
            </div>
            <div className="App-versus">VS</div>
            <div className={`Hand ${result === '패배' ? 'winner' : ''}`}>
              <HandIcon className='Hand-icon' value={you.hand} />
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
    </section>
  );
};

export default App;