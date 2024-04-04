import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

const getResult = (left, right) => {
  if (WINS[left] === right) return "승리";
  else if (left === WINS[right]) return "패배";
  else return "무승부";
};

const handleClick = () => {
  console.log("가위바위보!");
};

const me = "rock";
const other = "scissor";

root.render(
  <>
    <h1>가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button>
  </>
);
