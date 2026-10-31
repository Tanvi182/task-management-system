
import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = ({ activePage, onSelect }) => {
  const menuItems = [
    "Overview",
    "Projects",
    "Tasks",
    "Team Members"
  ];

  return (
    <div className="sidebar bg-dark text-white p-3"
         style={{minWidth:"400px"}}
    >
      <h5 className="mb-4">Workspace</h5>

      <Nav className="flex-column">
        {menuItems.map((item) => (
          <Nav.Link
            key={item}
            className={`text-white mb-2 ${
              activePage === item ? "bg-primary rounded" : ""
            }`}
            onClick={() => onSelect(item)}
            style={{ cursor: "pointer" }}
          >
            {item}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
