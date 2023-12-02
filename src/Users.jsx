import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';


function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
      axios.get("http://localhost:6001")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:6001/deleteuser/'+id)
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err))
    }
    
  return (

    <div class="outer">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">MERN APP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <a class="nav-link mx-2 active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="#">Data</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="#">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2" href="#" role="button">
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="box d-flex vh-100 justify-content-center align-items-start">
        <div className="outer-1 w-50 bg-white rounded p-3">
          <Link to="/create" className="btn btn-success btn-sm">
            Add +
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link to={`/update/${user.id}`} className="btn btn-sm btn-success me-2">Update</Link>
                    <button onClick={(e) => handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;