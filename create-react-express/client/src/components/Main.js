import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import API from "./utils/API";

class Main extends Component { 
    state = {
        topic: "",
        startYear: "",
        endYear: "",
        articles: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    
    handleFormSubmit = event => {
        event.preventDefault();
            API.runQuery(this.state.search)
            .then(res => this.setState({ articles: res.data}))
            .catch(err => console.log(err));
            
            // console.log("clicked")
    
        };
 

render () {
    return (

<Container fluid>
    <Row>
        <Col size="md-12">
            <Jumbotron>
                <h1>New York Times Article Scraper</h1>
                <h3>Search for articles of interest and save them!</h3>
            </Jumbotron>

            <div className="card">
            <div className="card-header">Search for Article Topics</div>
            <div className="card-body">
            <form>
                <label htmlFor="articleTitle">Article Topic</label>
                <Input 
                    value={this.state.topic}
                    onChange={this.handleInputChange}
                    name="topic"
                    placeholder=""
                />
                <label htmlFor="articleTitle">Start Year</label>
                <Input 
                    value={this.state.startYear}
                    onChange={this.handleInputChange}
                    name="startYear"
                    placeholder=""
                />
                <label htmlFor="articleTitle">End Year</label>
                <Input 
                    value={this.state.endYear}
                    onChange={this.handleInputChange}
                    name="endYear"
                    placeholder=""
                />
                <FormBtn
                    disabled={!(this.state.topic)}
                    onClick={this.handleFormSubmit}
                > Search
                </FormBtn>
            </form>
        </div>
        </div>

               
            </Col>
        </Row>

       

    </Container>

)
}
}

export default Main;