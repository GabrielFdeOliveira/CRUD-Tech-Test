import axios from "axios";

export const getSingleUser = async (id) => {
  const result = await axios.get(`http://localhost:3000/api/users/${id}`);
  if (result.status === 200) {
    return result.data[0];
  }
  return null;
};
