import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom px-4">
      <Link className="navbar-brand" href="/">
        <img src="/img/logo.png" alt="Logo" width="150" height="50" className="d-inline-block align-text-center" />
      </Link>

      <div className="d-flex align-items-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link href="/" legacyBehavior>
              <a className="nav-link active" aria-current="page">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/About" legacyBehavior>
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Service" legacyBehavior>
              <a className="nav-link">Service</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Contact" legacyBehavior>
              <a className="nav-link">Contact</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/User" legacyBehavior>
              <a className="nav-link">User</a>
            </Link>
          </li>
        </ul>
        <Link href="/Signin" legacyBehavior>
          <a className="btn btn-outline-primary me-2">Sign in</a>
        </Link>
        <Link href="/Signup" legacyBehavior>
          <a className="btn btn-primary">Sign up</a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
