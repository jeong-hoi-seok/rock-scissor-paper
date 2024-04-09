import resetImg from "../assets/ic-reset.svg";

const Button = (props) => {
  const { onClick } = props;
  return (
    <img className="App-reset" src={resetImg} alt="초기화" onClick={onClick} />
  );
};

export default Button;
