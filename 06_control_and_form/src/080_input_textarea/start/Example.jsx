import { useState } from 'react'

const Example = () => {

  const [val,setVal] = useState("")

  const changeVal = (e) => {
    setVal(e.target.value)
  }

  const valReset = () => {
    setVal("")
  }

  return (
    <>
      <label>ラベル</label>
      <br></br>
      <div>
        <input type="text" value={val} onChange={changeVal} placeholder="こんにちは" />
        <textarea value={val} onChange={changeVal} placeholder="こんにちは" />
      </div>
      <br></br>
      <h3>{val}</h3>
      <button onClick={valReset}>クリア</button>
    </>
  );
};

export default Example;
