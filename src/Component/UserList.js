import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import CardList from "./CardList";
// import "./style.css";
export default class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      const user = res.data;
      this.setState({ users: user });
    });
  }

  render() {
    return (
      <div className="card">
        <Row>
          {this.state.users.map(user => (
            // <ul className='list'>
            //   <li>{user.name}</li>
            //   <li>{user.website}</li>
            //   <li>{user.email}</li>
            // </ul>
            <Col md={3}>
              <CardList user={user} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
