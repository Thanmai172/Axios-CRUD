import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const api = axios.create({
  baseURL: BASE_URL,
});

// Example functions for CRUD operations
export const getUsers = () => api.get("/");
export const addUser = (data) => api.post("/", data);
export const updateUser = (id, data) => api.put(`/${id}`, data);
export const deleteUser = (id) => api.delete(`/${id}`);
