import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef()

  return (
    <div>
      <h3>ボタンクリック時に入力フォームにフォーカスをあてる</h3>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
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
    <>
    <h3>動画再生プレイヤー</h3>
      <video style={{ maxWidth: "100%" }} ref={videoRef}>
        <source src="./v07025ae0000bsimm2nlt7tgudllsojg.mp4"></source>
      </video>
      <button onClick={videoPlay}>{videoState ? "Stop" : "Play"}</button>
    </>
  )
}

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;
