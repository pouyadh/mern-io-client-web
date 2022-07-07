import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import * as userApi from "../api/user";
import Cookies from "js-cookie";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ fallback, children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(() => {
    setIsLoading(true);
    userApi
      .get()
      .then((resp) => {
        setUser(resp.data);
        setIsLoading(false);
      })
      .catch(() => {
        setUser(null);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const signin = async (username, password) => {
    try {
      const { data } = await userApi.login(username, password);
      setUser(data);
      setIsLoading(false);
      return { user: data };
    } catch (err) {
      const { data } = err.response;
      setUser(null);
      setIsLoading(false);
      return { error: data };
    }
  };
  const signup = async (username, email, password) => {
    try {
      const { data } = await userApi.register(username, email, password);
      setUser(data);
      setIsLoading(false);
      return { user: data };
    } catch (err) {
      const { data } = err.response;
      setUser(null);
      setIsLoading(false);
      return { error: data };
    }
  };

  const signout = () => {
    Cookies.remove("auth");
  };

  if (fallback && isLoading) {
    return fallback;
  }

  const value = {
    user,
    isLoading,
    refresh: fetchUser,
    signin,
    signup,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
