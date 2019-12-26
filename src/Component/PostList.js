import React from "react";
import axios from "axios";
import CardPost from './CardPost'
import { Row, Col } from "react-bootstrap";
export default class PostList extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`).then(res => {
      const post = res.data;
      this.setState({ posts:post });
    });
  }

  render() {
    return (
        
      <div className="card">
          <Row>
        {this.state.posts.map(post => (
         <Col md={3}>
         <CardPost post={post}/>
         </Col>
        ))}
        </Row>
      </div>
    );
  }
}
