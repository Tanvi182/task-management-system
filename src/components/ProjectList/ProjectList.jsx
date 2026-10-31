import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const ProjectList = ({
  projects,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="mb-4">
      <h4 className="mb-3">My Projects</h4>

      {projects.length > 0 ? (
        <Row className="g-3">
          {projects.map((project) => (
            <Col md={4} key={project.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>
                    {project.name}
                  </Card.Title>

                  <Card.Text>
                    {project.description}
                  </Card.Text>

                  <div className="d-flex gap-2">
                    <Button
                      size="sm"
                      variant="outline-primary"
                      onClick={() =>
                        onEdit(project)
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() =>
                        onDelete(project.id)
                      }
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-muted">
          No Projects Found
        </p>
      )}
    </div>
  );
};

export default ProjectList;