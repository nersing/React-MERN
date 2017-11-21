import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import API from "./utils/API";
import Search from "./Search"


class Save extends Component { 
    state = {
        articles: [],
       
    };


render () {
    return (
        <Container fluid>
        
            
            <Row>
            <Col size="md-12">  
                <div className="card">
                <div className="card-header">Saved Articles</div>
                <div className="card-body">

                {this.state.articles.length ? (
                        <List>
                            {this.state.articles.map(article => (
                                <ListItem key={article.title}>
                                <Link to={"/articles/" + article.title}>
                                <strong>
                                    {article.title}
                                </strong>
                                </Link>
                                <DeleteBtn onClick={() => this.delete(article.title)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Saved Articles to Display</h3>
                    )
                    }
                </div>
                </div>

            </Col>
            </Row>
            </Container>

            )
            }
            }

export default Save;


