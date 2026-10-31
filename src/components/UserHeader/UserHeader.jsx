
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import { logout } from "../../features/authSlice";
// import "./Header.css";

const Header = ({ user }) => {

    const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Navbar bg="white" className="container-fluid d-flex justify-content-between align-items-center shadow-sm px-3">
        <Navbar.Brand className="fw-bold text-primary">
          ProjectFlow
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-3">
          <span>Welcome, {user || "User"}</span>

           <Button
            variant="outline-danger"
            size="sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
    </Navbar>
  );
};

export default Header;
