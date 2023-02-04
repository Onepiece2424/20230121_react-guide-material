import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef()

  const [videoState, setVideoState] = useState(false)
  const videoRef = useRef();
  const videoPlay = () => {
    if (videoState) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setVideoState(!videoState)
  }

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>

      <h3>ユースケース2</h3>
      <video style={{ maxWidth: "100%" }} ref={videoRef}>
        <source src="./sample.mp4"></source>
      </video>
      <button onClick={videoPlay}>{videoState ? "Stop" : "Play"}</button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
