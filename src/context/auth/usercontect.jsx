import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();


export default function UserContextProvider(props) {
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = localStorage.getItem("data");
  
    if (token && data) {
      setUserToken(token);
      setUserData(JSON.parse(data));
    }
  }, []);
  return (
    <UserContext.Provider
      value={{ userToken, setUserToken , userData, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
}
