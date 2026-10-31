import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const ProjectForm = ({
  show,
  onHide,
  onSave,
  editProject,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editProject) {
      setFormData({
        name: editProject.name || "",
        description: editProject.description || "",
      });
    } else {
      setFormData({
        name: "",
        description: "",
      });
    }
  }, [editProject, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Project Name is required");
      return;
    }

    try {
      setLoading(true);

      await onSave(formData);

      setFormData({
        name: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {editProject
            ? "Edit Project"
            : "Create Project"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Project Name</Form.Label>

            <Form.Control
              type="text"
              name="name"
              placeholder="Enter project name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              placeholder="Enter description"
              value={formData.description}
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
              : editProject
              ? "Update Project"
              : "Create Project"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ProjectForm;