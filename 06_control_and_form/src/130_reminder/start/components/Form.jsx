import { useState } from 'react'

const Form = ({ createTodo }) => {

  const [val,setVal] = useState("")

  const addTodo = (e) => {

    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: val
    }

    createTodo(newTodo);

    setVal("");
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
        <button>追加</button>
      </form>
    </div>
  )
}

export default Form
