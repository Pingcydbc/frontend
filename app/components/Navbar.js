'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setUsername(user.username);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername('');
    window.location.href = '/'; // Consider using Next.js's router for redirection
  };

  return (
    <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom px-4">
      <Link className="navbar-brand" href="/">
        <img src="/img/logo.png" alt="Logo" width="150" height="50" className="d-inline-block align-text-center" />
      </Link>

      <div className="d-flex align-items-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link href="/" className="nav-link text-dark" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/About" className="nav-link text-dark">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/Service" className="nav-link text-dark">Service</Link>
          </li>
          <li className="nav-item">
            <Link href="/Contact" className="nav-link text-dark">Contact</Link>
          </li>
          {isLoggedIn && (
            <li className="nav-item">
              <Link href="/Users" className="nav-link text-dark">Users</Link>
            </li>
          )}
        </ul>
        <div className="d-flex align-items-center">
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <span>Welcome, {username}</span>
              <button onClick={handleLogout} className="btn btn-outline-dark">Logout</button>
            </div>
          ) : (
            <>
              <Link href="/Signin" className="btn btn-outline-dark me-2">Sign in</Link>
              <Link href="/Signup" className="btn btn-outline-dark me-2">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
