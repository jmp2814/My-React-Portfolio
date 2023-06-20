import { Link } from "react-router-dom";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <nav className="navbar navbar-expand-lg">
        <Link
          onClick={() => handlePageChange("React-Bio")}
          className={
            currentPage === "React-Bio"
              ? "nav-link active fs-3"
              : "nav-link fs-3"
          }
          to="/React-Bio"
        >
          About Me
        </Link>
        <Link
          onClick={() => handlePageChange("My-React-Portfolio")}
          className={
            currentPage === "My-React-Portfolio"
              ? "nav-link active fs-3"
              : "nav-link fs-3"
          }
          to="/My-React-Portfolio"
        >
          Portfolio
        </Link>
        <Link
          onClick={() => handlePageChange("resume")}
          className={
            currentPage === "resume" ? "nav-link active fs-3" : "nav-link fs-3"
          }
          to="/resume"
        >
          Resume
        </Link>
        {/* <Link
          onClick={() => handlePageChange("contact")}
          className={
            currentPage === "contact" ? "nav-link active fs-3" : "nav-link fs-3"
          }
          to="/contact"
        >
          Contact
        </Link> */}
      </nav>
    </div>
  );
}

export default Navbar;
