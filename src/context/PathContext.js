import { createContext, useContext, useMemo, useState } from "react";

export const PathContext = createContext();
export const usePath = () => useContext(PathContext);
export const PathProvider = ({ children }) => {
  const [location, setLocation] = useState(["dashboard"]);
  const add = (sub) => {
    setLocation((prvPath) => [...prvPath, sub]);
  };
  const back = () => {
    setLocation((prvPath) => {
      const newPath = [...prvPath];
      newPath.pop();
      return newPath;
    });
  };
  const set = (location) => {
    setLocation(location.split("/"));
  };
  const strLocation = useMemo(() => location.join("/"), [location]);
  const value = {
    add,
    back,
    set,
    location: strLocation,
    locationArray: location,
  };
  return <PathContext.Provider value={value}>{children}</PathContext.Provider>;
};
