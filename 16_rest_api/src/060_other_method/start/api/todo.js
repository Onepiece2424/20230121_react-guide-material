import axios from "axios"

const ENDPOINT_URL = 'http://localhost:3003/todo'

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL)
    console.log(result)
    return result.data;
  }
}

todoApi.getAll();
