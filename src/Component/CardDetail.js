import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardDetails = ({ detail }) => {
  return (
    <div className="cardL m-3">
      <Card className="text-center" text="white" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="mb-2 text-muted">{detail.body}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDetails;
