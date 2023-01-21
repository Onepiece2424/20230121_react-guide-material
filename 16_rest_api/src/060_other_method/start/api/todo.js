import axios from "axios"

const ENDPOINT_URL = 'http://localhost:3003/todo'

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL)
    console.log(result)
    return result.data;
  },
  async post(todo) {
    const result = await axios.post(ENDPOINT_URL, todo)
    console.log(result)
    return result.data;
  },
  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + '/' + todo.id)
    return result.data;
  }
}

todoApi.delete({
  id: 'c5868bfe-fa1d-4891-acd3-bc43959a9bb7'
});
