// Signup.js

import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า Bootstrap CSS

export default function Signup() {
  return (
    <div className="container">
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up for a new account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="d-flex justify-content-center align-items-center">
        <div className="card p-4">
          <h1 className="text-center mb-4">Sign Up</h1>
          <form className="needs-validation">
            <div className="form-group">
              <label htmlFor="fullname">Full Name:</label>
              <input type="text" className="form-control" id="fullname" name="fullname" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" id="password" name="password" required />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          </form>
        </div>
      </main>
    </div>
  );
}
