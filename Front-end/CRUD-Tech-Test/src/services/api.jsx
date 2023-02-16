import axios from "axios";

export const getSingleUser = async (id) => {
  const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`);
  if (result.status === 200) {
    return result.data[0];
  }
  return null;
};
