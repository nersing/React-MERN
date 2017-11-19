import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import API from "./utils/API";
import Query from "./Search/Query"

class Main extends Component { 
 
 

render () {
    return (

<Container fluid>
    <Row>
        <Col size="md-12">
            <Jumbotron>
                <h1>New York Times Article Scraper</h1>
                <h3>Search for articles of interest and save them!</h3>
            </Jumbotron>

            <Query updateSearch={this.setQuery} />
 
            </Col>
        </Row>

       

    </Container>

)
}
}

export default Main;