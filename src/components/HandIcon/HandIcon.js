import rockImg from "../../assets/rock.svg";
import scissorImg from "../../assets/scissor.svg";
import paperImg from "../../assets/paper.svg";
import "./Hand.css";

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

const HandIcon = (props) => {
  const { value, className } = props;
  const src = IMAGES[value];
  return (
    <>
      <img className={className || ''} src={src} alt={value} />
    </>
  );
};

export default HandIcon;
