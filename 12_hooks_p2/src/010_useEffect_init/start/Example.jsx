import { useState, useEffect } from 'react'

const Example = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(prev => prev + 1)
    }, 1000)
  })
  return (
    <>
      <h3>{count}秒経過</h3>
    </>
  );
};

export default Example;
