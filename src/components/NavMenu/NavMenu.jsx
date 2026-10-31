import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

function NavMenu() {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <div className="d-flex gap-2">
      <Button variant="success" onClick={() => navigate("/login")}>
        Login
      </Button>
      <Button variant="light" onClick={() => navigate("/register")}>
        Register
      </Button>
    </div>
  );
}

export default NavMenu;
