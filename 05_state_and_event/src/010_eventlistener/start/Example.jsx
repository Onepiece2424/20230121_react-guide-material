const Example = () => {

  // アラート表示
  const clickAlert = () => {
    alert('ボタンがクリックされました。');
  }

  // コンソールでクリックした回数を表示
  const countClick = () => {
    console.log('ボタンがクリックされました。')
  }

  return (
    <>
      <button onClick={clickAlert}>クリックしてね</button>
      <button onClick={countClick}>クリックしてね</button>
    </>
  );
};

export default Example;
