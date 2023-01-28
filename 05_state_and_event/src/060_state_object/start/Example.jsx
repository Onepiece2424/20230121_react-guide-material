import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };

  const [obj,setObj] = useState(personObj);

  // 名前と年齢を入力するたびに変更する
  const changeName = (e) => {
    setObj(prev => ({ ...prev, name: e.target.value }))
  }
  const changeAge = (e) => {
    setObj(prev => ({ ...prev, age: e.target.value }))
  }

  // 入力フォームの値のリセット
  const valueReset = () => {
    setObj("")
    const textForm1 = document.getElementById("form1");
    const textForm2 = document.getElementById("form2");
    textForm1.value = '';
    textForm2.value = '';
  }

  return (
    <>
      <h3>Name:{obj.name}</h3>
      <h3>Age:{obj.age}</h3>
      <input id="form1" onChange={changeName} value={obj.name} />
      <input id="form2" onChange={changeAge} value={obj.age} type='number' />
      <div><button onClick={valueReset}>リセット</button></div>
    </>
  )
};

export default Example;
