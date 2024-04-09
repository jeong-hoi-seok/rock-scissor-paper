import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

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
      <div className="Hand">
        <img className={className} src={src} alt={value} />
      </div>
    </>
  );
};

export default HandIcon;
