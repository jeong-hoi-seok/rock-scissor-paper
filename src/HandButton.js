import HandIcon from "./HandIcon";
import "./HandButton.css";

const HandButton = (props) => {
  const { value, onClick } = props;
  const handleClick = () => onClick(value);
  return (
    <button className="HandButton" onClick={handleClick}>
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  );
};

export default HandButton;
