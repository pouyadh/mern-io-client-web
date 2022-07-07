import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/api/conversation`;
const ax = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const createChannel = async ({
  name,
  description,
  avatarURL,
  members,
}) => {
  return await ax.post(`/`, {
    type: "channel",
    name,
    description,
    avatarURL,
    members,
  });
};

export const create = async (
  type,
  members,
  settings,
  name = "",
  description = ""
) => {
  return await ax.post(`/`, { type, members, settings });
};

export const remove = async (conversationId) => {
  return await ax.delete(`/${conversationId}`);
};

export const edit = async (conversationId, data) => {
  return await ax.patch(`/${conversationId}`, data);
};

export const getList = async () => {
  return await ax.get(`/`);
};

export const addMember = async (conversationId, username) => {
  return await ax.post(`/${conversationId}/member/${username}`);
};

export const removeMember = async (conversationId, username) => {
  return await ax.delete(`/${conversationId}/member/${username}`);
};

export const editMember = async (conversationId, username, data) => {
  return await ax.patch(`/${conversationId}/member/${username}`, data);
};

export const addMessage = async (conversationId, data) => {
  return await ax.patch(`/${conversationId}/message`, data);
};

export const removeMessage = async (conversationId, messageId) => {
  return await ax.delete(`/${conversationId}/message/${messageId}`);
};

export const updateMessage = async (conversationId, messageId, data) => {
  return await ax.put(`/${conversationId}/message/${messageId}`, data);
};
