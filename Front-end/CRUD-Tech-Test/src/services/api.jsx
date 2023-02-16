import axios from "axios";

export const getSingleUser = async (id) => {
  const result = await axios.get(`https://crud-app-bakcend.onrender.com/api/users/${id}`);
  if (result.status === 200) {
    return result.data[0];
  }
  return null;
};
