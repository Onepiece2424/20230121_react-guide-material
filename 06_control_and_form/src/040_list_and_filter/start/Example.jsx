import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  const [value,setValue] = useState("")

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <h3>配列のフィルター</h3>
      <input onChange={changeValue} value={value} />
      <ul>
        {animals
          .filter((animal) => animal.indexOf(value) !== -1)
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
