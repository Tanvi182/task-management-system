
import React from "react";
import { Form } from "react-bootstrap";

const TaskFilters = ({ filters, setFilters }) => {

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="g-2 mb-4">

      <div md={4}>
        <Form.Control
          type="search"
          name="search"
          placeholder="Search tasks..."
          value={filters.search}
          onChange={handleChange}
        />
      </div>

      <div md={3}>
        <Form.Select
          name="status"
          value={filters.status}
          onChange={handleChange}
        >
          <option value="">All Status</option>
          <option>Todo</option>
          <option>In Progress</option>
          <option>Review</option>
          <option>Completed</option>
        </Form.Select>
      </div>

      <div md={3}>
        <Form.Select
          name="priority"
          value={filters.priority}
          onChange={handleChange}
        >
          <option value="">All Priorities</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </Form.Select>
      </div>

      <div md={2}>
        <Form.Select
          name="projectId"
          value={filters.projectId}
          onChange={handleChange}
        >
          <option value="">All Projects</option>
          {filters.projects?.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </Form.Select>
      </div>

    </div>
  );
};

export default TaskFilters;
