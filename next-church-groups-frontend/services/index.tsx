import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:3000",
})

export const getGroups = async () => {
  return instance.get("/groups")
}
