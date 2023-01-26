import { useState } from 'react'

const Example = () => {

  const [ text, setText] = useState("");

  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />={text}
    </>
  );
};

export default Example;
