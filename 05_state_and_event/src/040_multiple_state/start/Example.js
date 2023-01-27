import { useState } from 'react';

const Example = () => {

  // Exampleコンポーネントの中身
  console.log(<Example />)

  // stateの設定
  const [ count1, setCount1 ] = useState(0);
  const [ count2, setCount2 ] = useState(10);
  const [ count3, setCount3 ] = useState(100);

  return (
    <>
      <div>ボタンAを{count1}回押しました!</div>
      <br></br>
      <button onClick={() => setCount1(prev => prev + 1)}>ボタンA</button>
      <div>ボタンBを{count2}回押しました!</div>
      <br></br>
      <button onClick={() => setCount2(prev => prev + 1)}>ボタンB</button>
      <div>ボタンCを{count3}回押しました!</div>
      <br></br>
      <button onClick={() => setCount3(prev => prev + 1)}>ボタンC</button>
    </>
  )
};

export default Example;
