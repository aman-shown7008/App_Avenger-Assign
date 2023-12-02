import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function CreateUser() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:6001/createUser', {name, email, age})
        .then(res => {
            console.log(res.config.data);
            navigate('/')
        })
        .catch(err => console.log(err))
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
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CreateUser;