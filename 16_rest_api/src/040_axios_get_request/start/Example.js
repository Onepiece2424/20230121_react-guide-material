import { useEffect } from 'react'
import axios from "axios";


const Example = () => {

  // APIデータの取得
  useEffect(() => {
    const getUsers = async() => {
      const response = await axios.get('http://localhost:3003/user')
      console.log(response.data)
    }
    getUsers();
  },[])

  return <></>;
};

export default Example;
