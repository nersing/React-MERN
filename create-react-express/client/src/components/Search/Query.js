import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import API from "../utils/API";



class Query extends Component { 
    state = {
        topic: "",
        startYear: "",
        endYear: ""
    };

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
}


handleFormSubmit = event => {
    
    event.preventDefault();
       API.runQuery(this.state.search, this.state.start, this.state.end)
        .then(res => this.setState({ articles: res.data}))
        .catch(err => console.log(err));
        
        // console.log("clicked")

    };

render () {
    return (
      
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
        )
    }
}

export default Query;