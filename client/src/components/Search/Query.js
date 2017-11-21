import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import API from "../utils/API";
import Search from "../Search"



class Query extends Component { 
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
       API.runQuery(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => this.setState({ articles: res.data })) 
        .catch(err => console.log(err));

        
        
        console.log("you are trying to search for" + this.state.topic)
        

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