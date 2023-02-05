const List = ({todos, deleteTodo}) => {

  // 完了ボタンを押すと消える
  const complete = (id) => {
    deleteTodo(id)
  }

  return (
    <div>
      {todos.map((todo) =>
        <div key={todo.id}>
          <button onClick={() => complete(todo.id)}>完了</button>
          <span>{todo.content}</span>
        </div>
      )}

    </div>
  )
}

export default List
