import { useState } from 'react';

const Example = () => {

  const fruits = ["Apple","Banana","Cherry"]

  const [selected, setSelected] = useState("Banana")

  const updateSelect = (e) => {
    setSelected(e.target.value)
  }
  return (
    <>
    <select value={selected} onChange={updateSelect}>
    {fruits.map((fruit) => {
      return (
        <option key={fruit} value={fruit}>{fruit}</option>
      )
    })}
    </select>
      <p>選択された果物：{selected}</p>
    </>
  );
};

export default Example;
