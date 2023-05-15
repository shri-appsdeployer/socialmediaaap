import React from "react";
import "./Navbar.scss";
import { FaSearch} from 'react-icons/fa';




const Navbar = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand">Social Media App</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
                <FaSearch/>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
