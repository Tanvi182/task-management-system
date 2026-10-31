
import React from "react";
import TaskCard from "../TaskCard/TaskCard";

const TaskBoard = ({
  tasks,
  users,
  onEdit,
  onDelete,
  onStatusChange
}) => {

  const statuses = [
    "Todo",
    "In Progress",
    "Review",
    "Completed"
  ];

  return (
    <div className="g-3">

      {statuses.map((status) => {

        const filteredTasks = tasks.filter(
          (task) => task.status === status
        );

        return (
          <div lg={3} md={6} key={status}>

            <div className="bg-light p-3 rounded h-100">

              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-bold">{status}</h6>

                <span className="badge bg-secondary">
                  {filteredTasks.length}
                </span>
              </div>

              {filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  users={users}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onStatusChange={onStatusChange}
                />
              ))}

              {filteredTasks.length === 0 && (
                <p className="text-muted small">
                  No tasks available.
                </p>
              )}

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default TaskBoard;