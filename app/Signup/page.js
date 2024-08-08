'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // นำเข้าไอคอน

export default function Page() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, username, password }),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-dark text-white">
            SignUp Form
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">FirstName</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark text-white" id="basic-addon1"><i className="bi bi-person"></i></span>
                  <input
                    id="firstname"
                    type="text"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">LastName</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark text-white" id="basic-addon2"><i className="bi bi-person-fill"></i></span>
                  <input
                    id="lastname"
                    type="text"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark text-white" id="basic-addon3"><i className="bi bi-person-lines-fill"></i></span>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark text-white" id="basic-addon4"><i className="bi bi-lock-fill"></i></span>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-outline-dark"><i className="bi bi-box-arrow-right"></i> Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
