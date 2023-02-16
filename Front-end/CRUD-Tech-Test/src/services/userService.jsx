import axios from "axios";
import { getUsers } from "../pages/Home";

  export const deleteUser = async (id) => {
    if (
      window.confirm("Are you sure you want to delete that user record?")
    ) {
      const result = await axios.delete(`http://localhost:3000/api/users/${id}`);
      console.log(result)
      if (result.data.status === 200) {       
        toast.success(result.data.message);
        getUsers()    
      }
    }    
  };



