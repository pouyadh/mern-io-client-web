import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/api/conversation`;
const ax = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const getList = async () => {
  return await ax.get(`/`);
};

export const createSave = async () => {
  return await ax.post('/', { type: "SAVE" });
}

export const createPrivate = async (target_username) => {
  return await ax.post('/', { type: "PRIVATE", members: [target_username] });
}

export const createGroup = async (members, name, description, avatarURL) => {
  return await ax.post('/', { type: "GROUP", members, name, description, avatarURL });
}

export const createChannel = async (members, name, description, avatarURL) => {
  return await ax.post('/', { type: "CHANNEL", members, name, description, avatarURL });
}


export const remove = async (conversationId) => {
  return await ax.delete(`/${conversationId}`);
};

export const markAsDelivered = async (conversationId) => {
  return await ax.put(`/${conversationId}/delivered`, {});
}

export const markAsSeen = async (conversationId) => {
  return await ax.put(`/${conversationId}/seen`, {});
}

export const edit = async (conversationId, changes) => {
  return await ax.patch(`/${conversationId}`, changes);
};

export const addMember = async (conversationId, member_username) => {
  return await ax.post(`/${conversationId}/member`, { member_username });
};

export const removeMember = async (conversationId, member_username) => {
  return await ax.delete(`/${conversationId}/member/${member_username}`);
};

export const editMemberRole = async (conversationId, member_username, new_role) => {
  return await ax.patch(`/${conversationId}/member/${member_username}`, { new_role });
};

export const getMessages = async (conversationId,) => {
  return await ax.get(`/${conversationId}/message`);
};

export const addMessage = async (conversationId, message) => {
  return await ax.post(`/${conversationId}/message`, { message });
};

export const removeMessage = async (conversationId, messageId) => {
  return await ax.delete(`/${conversationId}/message/${messageId}`);
};

export const updateMessage = async (conversationId, messageId, message) => {
  return await ax.put(`/${conversationId}/message/${messageId}`, { message });
};
