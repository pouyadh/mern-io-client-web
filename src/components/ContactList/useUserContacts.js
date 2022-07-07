import { useEffect, useState } from "react";
import { getContacts } from "../../api/user";

const useUserContacts = () => {
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContacts()
      .then((resp) => {
        setContacts(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        setContacts(null);
        setLoading(false);
      });
  }, []);
  return contacts;
};

export default useUserContacts;
