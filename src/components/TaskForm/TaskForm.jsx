import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const TaskForm = ({
  show,
  onHide,
  onSave,
  projects = [],
  users = [],
  editTask
}) => {

  // Initial form values
  const initialData = {
    title: "",
    description: "",
    projectId: "",
    assignedTo: "",
    priority: "Medium",
    status: "Todo",
    dueDate: ""
  };

  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  // Load existing task data when editing
  useEffect(() => {

    if (editTask) {

      setFormData({
        title: editTask.title || "",
        description: editTask.description || "",
        projectId: editTask.projectId != null
          ? String(editTask.projectId)
          : "",
        assignedTo: editTask.assignedTo != null
          ? String(editTask.assignedTo)
          : "",
        priority: editTask.priority || "Medium",
        status: editTask.status || "Todo",
        dueDate: editTask.dueDate || ""
      });

    } else {

      setFormData({ ...initialData });

    }

  }, [editTask, show]);

  // Handle input changes
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

  };

  // Submit task
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter task title.");
      return;
    }

    if (!formData.projectId) {
      alert("Please select a project.");
      return;
    }

    try {

      setLoading(true);

      // Wait for API and Redux operation
      await onSave(formData);

      // Reset after successful operation
      setFormData({ ...initialData });

      // Parent component closes modal after success

    } catch (error) {

      console.error("Task Form Error:", error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <Modal
      show={show}
      onHide={loading ? undefined : onHide}
      centered
    >

      <Modal.Header closeButton={!loading}>

        <Modal.Title>
          {editTask ? "Edit Task" : "Create Task"}
        </Modal.Title>

      </Modal.Header>

      <Form onSubmit={handleSubmit}>

        <Modal.Body>

          {/* TASK TITLE */}

          <Form.Group className="mb-3">

            <Form.Label>Task Title</Form.Label>

            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
            />

          </Form.Group>


          {/* DESCRIPTION */}

          <Form.Group className="mb-3">

            <Form.Label>Description</Form.Label>

            <Form.Control
              as="textarea"
              name="description"
              rows={2}
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description"
            />

          </Form.Group>


          {/* PROJECT */}

          <Form.Group className="mb-3">

            <Form.Label>Select Project</Form.Label>

            <Form.Select
              name="projectId"
              value={formData.projectId}
              onChange={handleChange}
              required
            >

              <option value="">Choose Project</option>

              {projects.map((project) => (

                <option
                  key={project.id}
                  value={project.id}
                >
                  {project.name}
                </option>

              ))}

            </Form.Select>

          </Form.Group>


          {/* ASSIGNED USER */}

          <Form.Group className="mb-3">

            <Form.Label>Assign To</Form.Label>

            <Form.Select
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
            >

              <option value="">Unassigned</option>

              {users.map((user) => (

                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.name}
                </option>

              ))}

            </Form.Select>

          </Form.Group>


          {/* PRIORITY */}

          <Form.Group className="mb-3">

            <Form.Label>Priority</Form.Label>

            <Form.Select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >

              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>

            </Form.Select>

          </Form.Group>


          {/* STATUS */}

          <Form.Group className="mb-3">

            <Form.Label>Status</Form.Label>

            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >

              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Review">Review</option>
              <option value="Completed">Completed</option>

            </Form.Select>

          </Form.Group>


          {/* DUE DATE */}

          <Form.Group>

            <Form.Label>Due Date</Form.Label>

            <Form.Control
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />

          </Form.Group>

        </Modal.Body>


        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={onHide}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            variant="primary"
            disabled={loading}
          >

            {loading
              ? "Saving..."
              : editTask
                ? "Update Task"
                : "Create Task"}

          </Button>

        </Modal.Footer>

      </Form>

    </Modal>

  );

};

export default TaskForm;