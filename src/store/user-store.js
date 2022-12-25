import React, { useState, createContext, useContext, useEffect } from "react";
import { SORT_TYPE } from "../constants/constants";
import { getUsers } from "../services/api/user-service";

const AllUsers = createContext();

const UsersContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState(10);
  const [users, setUsers] = useState([]);
  const [nameSort, setNameSort] = useState(SORT_TYPE.AES);
  const [emailSort, setEmailSort] = useState(SORT_TYPE.AES);

  useEffect(() => {
    setLoading(true);
    getUsers().then((resp) => setUsers(resp.data));
    setLoading(false);
  }, []);

  return (
    <AllUsers.Provider
      value={{
        users,
        setUsers,
        loading,
        currentData,
        setCurrentData,
        nameSort,
        setNameSort,
        emailSort,
        setEmailSort,
      }}
    >
      {children}
    </AllUsers.Provider>
  );
};

export default UsersContext;

export const UsersState = () => {
  return useContext(AllUsers);
};
