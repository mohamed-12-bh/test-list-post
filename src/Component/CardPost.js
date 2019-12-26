import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
const CardPost = ({ post }) => {
  return (
    <div className="m-3 row justify-content-center">
       <Card className="text-center" border="success"  style={{ width: "20rem" }}>
        <Card.Body className="lists">
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{post.body}</Card.Subtitle>
          <Link to={`/details/${post.id}`}>
            <Button color="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPost;
