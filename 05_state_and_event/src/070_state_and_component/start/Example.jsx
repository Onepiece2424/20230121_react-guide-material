import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true)

  // カウントアップダウン
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  // toggleボタンの表示の切り替え
  const changeFlag = () => {
    setFlag(prev => !prev)
  }

  return (
    <>
      <button onClick={changeFlag}>toggle</button>
      <h3>{flag ? "A" : "B"}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
