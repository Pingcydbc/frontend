"use client";

import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า Bootstrap CSS
import Swal from 'sweetalert2'; // นำเข้า SweetAlert2
import { useState } from 'react'; // นำเข้า useState
import { useRouter } from 'next/navigation'; // นำเข้า useRouter

export default function Page() {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [message, setMessage] = useState(''); // เก็บข้อความแจ้งเตือน

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('https://backend-alpha-wheat.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const result = await res.json();
  
      if (res.ok) {
        // บันทึก token และรายละเอียดผู้ใช้ใน localStorage
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify({ username })); // บันทึกรายละเอียดผู้ใช้
        setMessage('Login successful!');
  
        // แสดง SweetAlert2 แจ้งเตือนการล็อกอินสำเร็จ
        Swal.fire({
          title: 'Success!',
          text: 'Login successful!',
          icon: 'success',
          timer: 1500, // แสดงการแจ้งเตือน 1.5 วินาที
          showConfirmButton: false
        }).then(() => {
          // เปลี่ยนไปยังหน้า http://localhost:3001/ หลังจากล็อกอินสำเร็จ
          router.push('/');
        });
      } else {
        setMessage(result.error);
        Swal.fire({
          title: 'Error!',
          text: result.error,
          icon: 'error'
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setMessage('An error occurred during login.');
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred during login.',
        icon: 'error'
      });
    }
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
          <form className="needs-validation" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input 
                type="text" 
                className="form-control" 
                id="username" 
                name="username" 
                value={username}
                onChange={(e) => setUserName(e.target.value)}
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
                onChange={(e) => setPassWord(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
      </main>
    </div>
  );
}
