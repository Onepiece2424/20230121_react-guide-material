import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  // ラジオボタンをクリック時に複数選択することができる
  const changeVal = (e) => {
    const newFruits = fruits.map((fruit) => {

      const newFruit = { ...fruit }

      if (newFruit.label === e.target.value) {
        newFruit.checked = !fruit.checked;
      }

      return newFruit;
    })

    setFruits(newFruits);
  }

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label} >
            <input id={fruit.label} type="checkbox" onChange={changeVal} value={fruit.label} checked={fruit.checked} />
            <label htmlFor={fruit.label}>{fruit.label}:{fruit.value}</label>
          </div>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
