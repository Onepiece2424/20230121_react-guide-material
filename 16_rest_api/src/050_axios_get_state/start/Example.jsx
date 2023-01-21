import { useEffect,useState } from 'react'
import axios from "axios";


const Example = () => {

  const [users,setUsers] = useState([])

  // APIデータの取得
  useEffect(() => {
    const getUsers = async() => {
      const response = await axios.get('http://localhost:3003/user')
      console.log(response.data)

      // stateにデータを代入
      setUsers(response.data)
    }
    getUsers()
  },[])

  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age: {user.age}</p>
            <p>hobby: {user.hobbies.join(',')}</p>
          </div>
        )
      })}
    </>
  );
};

export default Example;
