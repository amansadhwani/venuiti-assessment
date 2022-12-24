import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const AllUsers = createContext();

const UsersContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState(10);
  const [users, setUsers] = useState([]);
  const [nameSort, setNameSort] = useState("AES");
  const [emailSort, setEmailSort] = useState("AES");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/comments`)
      .then(function (response) {
        setUsers(response.data);
      });
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
