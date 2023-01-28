import { useState } from "react";

const Example = () => {

  // CountAとCountBを切り替えるフラグ（ただし、コンポーネントが切り替わってもstateのcountは引き継がれる）
  const [flag, setFlag] = useState(true)

  // toggleボタンの表示の切り替え
  const changeFlag = () => {
    setFlag(prev => !prev)
  }

  return (
    <>
      <button onClick={changeFlag}>toggle</button>
      { flag ? <Count title="A" /> : <Count title="B" /> }
    </>
  )
}

const Count = ({ title }) => {
  const [count, setCount] = useState(0);

  // カウントアップダウン
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
