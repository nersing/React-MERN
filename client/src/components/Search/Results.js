import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import API from "../utils/API";

class Results extends Component {
  state = {
    title: "",
    url: "",
    pubdate: "",
    article: {}
  };

  handleClick = (item, event) => {
    API.postSaved(item.headline.main, item.pub_date, item.web_url).then(
      function() {
        console.log(item.web_url);
      }
    );
  };

  render() {
    console.log(
      "these are the props in the RESULTS -----",
      this.props.articles
    );

    //  let htmlArray = [];

    //  for (let i=0; i<this.props.articles.length; i ++) {
    //     console.log('yessss ---', this.props.articles[i])

    //     let newHtml = (<h1 key={i}>{this.props.articles[i].headline.main}</h1>)
    //     htmlArray.push(newHtml)

    return this.props.articles.map((article, index) => {
      return (
        <Container fluid>
          <Row>
            <Col size="md-12">
              <div className="card">
                <div className="card-header">
                  Article from The New York Times
                </div>
                <div className="card-body">
                  <div className="card">
                    <div key={index}>
                      <li className="list-group-item" style={{ border: "0" }}>
                        <h3>
                          <span>
                            <h5>{article.headline.main}</h5>

                            <span className="btn-group pull-right">
                              <a
                                href={article.web_url}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <button
                                  className="btn btn-info"
                                  style={{ margin: "5px" }}
                                >
                                  View Article
                                </button>
                              </a>
                              {/* <button
                                className="btn btn-dark"
                                style={{ margin: "5px" }}
                                onClick={() => {
                                  this.handleClick(article);
                                }}
                              >
                                Save
                              </button> */}
                            </span>
                          </span>
                        </h3>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      );
    });
  }
}

export default Results;
