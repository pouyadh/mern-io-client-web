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
  return await ax.get(`/me`);
};

export const getUser = async (username) => {
  return await ax.get(`/${username}`)
}

export const updateAvatar = async (avatarURL) => {
  return await ax.put(`/me/avatar`, { avatarURL });
};

export const addContact = async (contact_username) => {
  return await ax.post(`/me/contact`, { contact_username });
};

export const removeContact = async (contact_username) => {
  return await ax.delete(`/me/contact/${contact_username}`);
};

export const getContacts = async () => {
  return await ax.get(`/me/contact`);
};
