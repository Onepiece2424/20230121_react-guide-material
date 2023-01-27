import { useState } from "react";

const Example = () => {

  const[count,setCount] = useState(0)

  const countUp = () => {
    setCount(prev => prev + 2)
  }

  const countDown = () => {
    setCount(prev => prev - 1)
  }

  return (
    <>
      <div>現在のカウント数: {count}</div>
      <br></br>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  )
};

export default Example;
