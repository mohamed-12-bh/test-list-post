import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardList = ({ user }) => {
  return (
    <div className="cardL m-3">
      <Card className="text-center" border="info"  style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user.website}
          </Card.Subtitle>
          <Card.Text>{user.email}</Card.Text>
          <Link to={`/posts/${user.id}`}>
            <Button variant="primary">Posts</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardList;
