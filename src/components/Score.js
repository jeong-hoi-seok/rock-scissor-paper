import "./Score.css";

const Score = (props) => {
  const { name, num } = props;
  return (
    <>
      <div className="Score">
        <div className="Score-num">{num}</div>
        <div className="Score-name">{name}</div>
      </div>
    </>
  );
};

export default Score;
