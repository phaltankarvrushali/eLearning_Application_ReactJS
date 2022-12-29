import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {

  const IsLogged = localStorage.getItem("IsLogged");
  function CheckUser() {
    if (IsLogged == "true") {
      return true;
    }
  }

  function LogOut(){
    localStorage.clear();
    window.location.reload(true);
  }
  return (
    <div className="navbar1">
      <Link to="/">
        <h1 className="nav-logo">EdEasy</h1>
      </Link>
      <ul className="nav-link">
        <li className="navbar">
          <Link to="/">Home</Link>
        </li>


          {CheckUser() ? (
            <>
              <li>
                <Link to="/teacher/courses">Courses</Link>
              </li>
              <li>
                <Link to="/teacher/courses/add">Add Course</Link>
              </li>
              <li onClick={LogOut} className="pointer">Logout</li>
            </>
          ) : (
            <>
            <li className="navbar"><Link to="/blog">Blogs</Link></li>
            <li className="navbar"><Link to="/about">About</Link></li>
            </>
          )}

      </ul>
    </div>
  );
}