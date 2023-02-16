import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./AddEdit.css";
import bgImage from '../video/backgoundVideo.mp4'
import { getSingleUser } from '../services/api';


function AddEdit() {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const { first_name, last_name, email } = input;
  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);


  const addUser = async (newUser) => {
    try {
      const result = await axios.post(
        "http://localhost:3000/api/users",
        newUser,
        {
          //To ensure the data is sent as JSON to the backend
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (result.data && result.data.message) {
        toast.success(result.data.message);
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error("Failed to add user");
      }
    } catch (err) {
      toast.error("Failed to add user");
    }
  };

  const updateUser = async (data, id) => {
    try {
      const result = await axios.put(
        `http://localhost:3000/api/users/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (result.status === 200) {
        toast.success(result.data.message);
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error("Failed to update user");
      }
    } catch (err) {
      toast.error("Failed to update user");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      //Spread the state to copy it's properties before replace them
      ...input,
      //Prevents a possible empty string (falsy value) to break the app
      [name]: value || '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first_name || !last_name || !email) {
      toast.error("Please fill all input fields.");
    } else {
      //Decide which fn to call
      if (id) {
        updateUser(input, id);
      } else {
        addUser(input);
      }
    }
  };

  return (
    <div className="add-form-container">
      <video autoPlay loop muted playsInline>
          <source src={bgImage} type="video/mp4" />
      </video> 
        <form className="add-form" onSubmit={handleSubmit}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="first_name"
            placeholder="Enter first name..."
            value={first_name}
            onChange={handleInputChange}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last_name"
            placeholder="Enter last name..."
            value={last_name}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email..."
            value={email}
            onChange={handleInputChange}
          />
          {/* Check if "id" is present, displaying a different text for each result */}
          <input type="submit" value={id ? "Update" : "Add"} />
        </form>
    </div>
  );
}

export default AddEdit;
