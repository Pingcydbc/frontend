// SignIn.js

import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า Bootstrap CSS

export default function SignIn() {
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
          <form className="needs-validation">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" className="form-control" id="username" name="username" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" id="password" name="password" required />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </form>
        </div>
      </main>

    </div>
  );
}
