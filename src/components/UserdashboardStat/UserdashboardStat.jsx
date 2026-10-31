
import React from "react";
import { Card } from "react-bootstrap";

const DashboardStats = ({ projects, tasks }) => {

  const totalProjects = projects.length;
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "Completed"
  ).length;

  const stats = [
    { title: "Total Projects", value: totalProjects },
    { title: "Total Tasks", value: totalTasks },
    { title: "Completed Tasks", value: completedTasks },
    { title: "Pending Tasks", value: pendingTasks }
  ];

  return (
    <div className="g-3 mb-4">
      {stats.map((item) => (
        <div md={3} sm={6} key={item.title}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Text className="text-muted">
                {item.title}
              </Card.Text>

              <h3 className="fw-bold">
                {item.value}
              </h3>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
