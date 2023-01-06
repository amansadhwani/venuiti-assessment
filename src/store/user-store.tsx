import React, { useState, createContext, useContext, useEffect } from "react";
import { SORT_TYPE } from "../constants/constants";
import { getUsers } from "../services/api/user-service";
import { TChildren, TUserContext } from "../types/user.type";

const defaultState = {
  loading: false,
  currentData: 10,
  users: [{}],
  nameSort: SORT_TYPE.AES,
  emailSort: SORT_TYPE.AES,
};

export const AllUsers = createContext<TUserContext>(defaultState);

const UsersContext = ({ children }: TChildren) => {
  const [loading, setLoading] = useState(true);
  const [currentData, setCurrentData] = useState(10);
  const [users, setUsers] = useState([]);
  const [nameSort, setNameSort] = useState(SORT_TYPE.AES);
  const [emailSort, setEmailSort] = useState(SORT_TYPE.AES);

  useEffect(() => {
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
