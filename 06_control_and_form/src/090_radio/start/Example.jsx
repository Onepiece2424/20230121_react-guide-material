import { useState } from 'react'

const Example = () => {

  const fruits = ["Apple","Banana", "Cherry"]
  const [arr,setArr] = useState(fruits[0])

  const changeVal = (e) => {
    setArr(e.target.value)
  }

  return (
    <>
      {fruits.map((fruit) => {
        return (
          <label key={fruit}>
            <input type="radio" onChange={changeVal} value={fruit} checked={fruit === arr} />
            {fruit}
          </label>
        )
      })}

      <h3>私は{arr}が食べたい</h3>
    </>
  );
};

export default Example;
