import { useState } from 'react'

const Example = () => {

  const [check,setCheck] = useState(true)

  // チェック時に切り替え
  const changeCheck = () => {
    setCheck(!check)
  }

  return (
    <>
      <label>チェック：</label>
      <input type="checkbox" checked={check} onChange={changeCheck} />
      <div>{check ? "ON!" : "OFF!"}</div>
    </>
  );
};

export default Example;
