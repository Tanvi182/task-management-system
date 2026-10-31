import React from "react";
import { Card } from "react-bootstrap";

const StatCard = ({ title, value, textColor }) => {
  return (
    <Card className="shadow-sm border-0 h-100">
      <Card.Body>
        <h6 className="text-muted">{title}</h6>
        <h2 className={textColor}>{value}</h2>
      </Card.Body>
    </Card>
  );
};

export default StatCard;