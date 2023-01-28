import { useState } from 'react';

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [array,setArray] = useState(numArray)

  // 配列をシャッフルする関数
  const numshuffle = () => {

    // arrayを新しい配列に置き換える
    const newNums = [...array]

    // 新たに作成した配列の末尾の要素をvalueへ
    const value = newNums.pop()

    // 配列の先頭に先ほどのvalueを追加する
    newNums.unshift(value)

    // stateのarrayを更新
    setArray(newNums)
  }

  return (
    <>
      <h1>{array}</h1>
      <button onClick={numshuffle}>shuffle</button>
    </>
  );
};

export default Example;
