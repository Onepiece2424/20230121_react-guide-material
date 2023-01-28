import { useState } from "react";

const Form = () => {
  const personObj = { name: "John", age: 20, job: "student" };

  const [obj,setObj] = useState(personObj);

  // 名前、年齢、職業を入力するたびに変更する
  const changeName = (e) => {
    // setObj(prev => ({ ...prev, name: e.target.value }))
    setObj(() => ({ name: e.target.value, age: obj.age, job: obj.job }))
  }
  const changeAge = (e) => {
    // setObj(prev => ({ ...prev, age: e.target.value }))
    setObj(() => ({ name: obj.name, age: e.target.value, job: obj.job  }))
  }
  const changeJob = (e) => {
    // setObj(() => ({ name: obj.name, age: obj.age, job: e.target.value }))
    setObj(() => ({ name: obj.name, age: obj.age, job: e.target.value }))
  }

  // 入力フォームの値のリセット
  const valueReset = () => {
    setObj({ name: "", age: "", job: "" })
  }

  return (
    <>
      <h3>Name:{obj.name}</h3>
      <h3>Age:{obj.age}</h3>
      <h3>Job:{obj.job}</h3>
      <input id="form1" onChange={changeName} value={obj.name} />
      <input id="form2" onChange={changeAge} value={obj.age} type='number' />
      <input id="form3" onChange={changeJob} value={obj.job} />
      <div><button onClick={valueReset}>リセット</button></div>
    </>
  )
};

export default Form;
