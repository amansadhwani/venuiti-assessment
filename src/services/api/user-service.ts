import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/comments`);
  return response;
};
