import { useEffect, useState } from "react";
import { getList } from "../../../api/conversation";

const useUserConversations = () => {
  const [conversations, setConversations] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getList()
      .then((resp) => {
        setConversations(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        setConversations(null);
        setLoading(false);
      });
  }, []);
  return conversations;
};

export default useUserConversations;
