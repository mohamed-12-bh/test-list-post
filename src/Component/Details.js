import React from "react";
import axios from "axios";
import  CardDetail from './CardDetail'
import { Row, Col } from "react-bootstrap";
export default class Details extends React.Component {
  state = {
    details: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`).then(res => {
      const detail = res.data;
      this.setState({ details:detail });
    });
  }

  render() {
    return (
      <div className="card">
          <Row>
        {this.state.details.map(detail => (
          <Col md={3}>
         <CardDetail detail={detail}/>
          </Col>

        ))}
        </Row>
      </div>
    );
  }
}
