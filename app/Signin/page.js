"use client";

import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า Bootstrap CSS
import Swal from 'sweetalert2'; // นำเข้า SweetAlert2
import { useState } from 'react'; // นำเข้า useState
import { useRouter } from 'next/navigation'; // นำเข้า useRouter

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // ใช้ useRouter

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Here you would handle form submission, e.g., send data to an API
    // For example:
    // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }) });
    // const data = await response.json();

    // Display SweetAlert2 success message
    Swal.fire({
      title: 'Sign In Successful',
      text: `Welcome, ${username}!`,
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Redirect to the home page
      router.push('/');
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign in to your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="d-flex justify-content-center align-items-center">
        <div className="card p-4">
          <h1 className="text-center mb-4">Sign In</h1>
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input 
                type="text" 
                className="form-control" 
                id="username" 
                name="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </form>
        </div>
      </main>
    </div>
  );
}
