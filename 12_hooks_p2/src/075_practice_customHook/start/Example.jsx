import useCount from "./hooks";
import Statusbar from "./StatusBar"

const Example = () => {

  const { count, countUp } = useCount();
  return (
    <>
      <div>Counts: {count}</div>
      <button onClick={countUp}>Count Up!</button>
      <br></br>
      <br></br>
      <Statusbar />
    </>
  );
};

export default Example;
