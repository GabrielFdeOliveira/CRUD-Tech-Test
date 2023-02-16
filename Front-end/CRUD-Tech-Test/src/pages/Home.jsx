import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import './Home.css'
import bgImage from '../video/backgoundVideo.mp4'
import { deleteUser } from '../services/userService';

export const getUsers = async () => {
  const result = await axios.get('http://localhost:3000/api/users');
  return result.data.payload;
};

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);
      
  return (
    <div>
        <div className="app-container" data-testid="home" >
        <video autoPlay loop muted playsInline>
          <source src={bgImage} type="video/mp4" />
        </video> 
          <h1 className="app-title">Users List</h1>
          <table className="app-table">
            <thead>
              <tr>
                <th style={{textAlign: 'center'}}>ID</th>
                <th style={{textAlign: 'center'}}>First Name</th>
                <th style={{textAlign: 'center'}}>Last Name</th>
                <th style={{textAlign: 'center'}}>Email</th>
                <th colSpan="2" style={{textAlign: 'center'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (            
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td >{user.email}</td>
                  <td>
                  <Link to={{ pathname: `/edit/${user.id}`, state: user }}>
                      <button>Edit</button>
                  </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Home