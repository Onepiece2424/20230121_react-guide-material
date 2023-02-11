import useCount from "./hooks";

const Example = () => {

  const { count, setCount } = useCount();
  return (
    <>
      <div>Counts: {count}</div>
      <button onClick={() => { setCount(prev => prev + 1)}}>Count Up!</button>
    </>
  );
};

export default Example;
