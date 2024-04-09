import "../styles/Box.css";
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

const Box = (props) => {
  return (
    <>
      <div className="Box App-box">
        <div className="Box-inner"></div>
      </div>
    </>
  );
};

export default Box;
