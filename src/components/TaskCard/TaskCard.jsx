
import React from "react";
import { Card, Button, Badge, Form } from "react-bootstrap";

const TaskCard = ({
  task,
  users,
  onEdit,
  onDelete,
  onStatusChange
}) => {

  const assignedUser = users.find(
    (user) => String(user.id) === String(task.assignedTo)
  );

  const priorityVariant = {
    Low: "success",
    Medium: "warning",
    High: "danger"
  };

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>

        <div className="d-flex justify-content-between">
          <Card.Title>{task.title}</Card.Title>

          <Badge bg={priorityVariant[task.priority]}>
            {task.priority}
          </Badge>
        </div>

        <Card.Text className="text-muted">
          {task.description}
        </Card.Text>

        <p className="small mb-2">
          Assigned to: {assignedUser?.name || "Unassigned"}
        </p>

        <p className="small mb-2">
          Due: {task.dueDate || "Not specified"}
        </p>

        <Form.Select
          size="sm"
          className="mb-3"
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value)
          }
        >
          <option>Todo</option>
          <option>In Progress</option>
          <option>Review</option>
          <option>Completed</option>
        </Form.Select>

        <div className="d-flex gap-2">
          <Button
            size="sm"
            variant="outline-primary"
            onClick={() => onEdit(task)}
          >
            Edit
          </Button>

          <Button
            size="sm"
            variant="outline-danger"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </Button>
        </div>

      </Card.Body>
    </Card>
  );
};

export default TaskCard;
