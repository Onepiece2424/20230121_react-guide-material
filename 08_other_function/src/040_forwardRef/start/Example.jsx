import { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props,  ref) => {

  // Exampleコンポーネントから渡ってきたrefとは別のrefを定義する
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    myFocus() {
      inputRef.current.focus()
    }
  }))
  return <input type="text" ref={inputRef}/>
})

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
