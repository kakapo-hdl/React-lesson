import axios from 'axios';
const baseUrl = 'http://localhost:3001'

const getAll = () => {
  const request = axios.get(baseUrl+"/api/notes")
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl+"/api/notes", newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  getAll:getAll, 
  create: create, 
  update: update 
}