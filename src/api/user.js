import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/api/user`;
const ax = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const register = async (username, email, password) => {
  return await ax.post("/", { username, email, password });
};

export const login = async (username, password) => {
  return await ax.post(`/${username}`, { password });
};

export const get = async () => {
  return await ax.get(`/`);
};

export const updateAvatar = async (imageUrl) => {
  return await ax.put(`/me/avatar`, { image: imageUrl });
};

export const addContact = async (username) => {
  return await ax.post(`/me/contact`, { contact_username: username });
};

export const removeContact = async (username) => {
  return await ax.delete(`/me/contact/${username}`);
};

export const getContacts = async () => {
  return await ax.get(`/me/contact`);
};
