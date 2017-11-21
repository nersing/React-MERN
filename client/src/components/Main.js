import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Query from "./Search/Query"
import Search from "./Search";
import Save from "./Save"

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

            <Search />
            <Save />
        
            </Col>
        </Row>
    </Container>

)
}
}

export default Main;