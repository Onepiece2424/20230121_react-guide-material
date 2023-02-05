import { useEffect, useState } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true)

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp(prev => !prev)}>とぐる</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);

  // 依存配列を渡さないときのクリーンアップ関数の実行（Timerコンポーネントが消滅する時に実行）
  useEffect(() => {
    // console.log('init');

    let intervalId = null;

    intervalId = window.setInterval(() => {
      console.log('interval called')
      setTime(prev => prev + 1);
    }, 1000);

    // クリーンアップ関数
    return () => {
      // console.log('end');
      window.clearInterval(intervalId)
    }
  }, [])

  // 依存配列を渡したときのクリーンアップ関数の実行（Timerコンポーネントが消滅する時に実行）
  useEffect(() => {
    // console.log('updated')
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time)

    return () => {
      // debugger
      // console.log('updated end')
    }
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
