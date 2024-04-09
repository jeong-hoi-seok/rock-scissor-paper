import "./Box.css";
import HandIcon from "./HandIcon";

// {
//   /* <div className="Box App-box">
//   <div className="Box-inner">
//     <div className="App-hands">
//       <HandIcon value={hand} />
//       VS
//       <HandIcon value={otherHand} />
//     </div>
//   </div>
// </div>; */
// }

const INITIAL_VALUE = "rock";

const Box = (props) => {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);

  return (
    <>
      <div className="Box App-box">
        <div className="Box-inner"></div>
      </div>
    </>
  );
};

export default Box;
