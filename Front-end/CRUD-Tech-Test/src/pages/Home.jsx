import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { deleteUser } from "../services/userService";

export const getUsers = async () => {
  try {
    const result = await axios.get(
      `https://crud-app-bakcend.onrender.com/api/users`
    );
    return result.data.payload;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteUser = (id) => {
    setIsLoading(true);
    deleteUser(id).then((result) => {
      if (result.status === 200) {
        getUsers().then((data) => {
          setUsers(data);
          setIsLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="app-container" data-testid="home">
        <h1 className="app-title">Users List</h1>
        {isLoading ? (
          <h2>Fetching data...</h2>
        ) : (
          <table className="app-table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>ID</th>
                <th style={{ textAlign: "center" }}>First Name</th>
                <th style={{ textAlign: "center" }}>Last Name</th>
                <th style={{ textAlign: "center" }}>Email</th>
                <th colSpan="2" style={{ textAlign: "center" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={{ pathname: `/edit/${user.id}`, state: user }}>
                      <button>Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Home;
