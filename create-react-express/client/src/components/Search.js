import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import API from "./utils/API";
import Main from "./Main"
import Query from "./Search/Query"
import Results from "./Search/Results"



class Search extends Component { 
    state = {
        articles: [],
        queryTerm: "",
        startYear: "",
        endYear: ""
    };


componentDidUpdate = (prevProps, prevState) => {
    if(this.state.queryTerm != "" &&
    (prevState.queryTerm != this.state.queryTerm ||
    prevState.startYear != this.state.startYear ||
    prevState.endYear != this.state.endYear))
    {
        API.runQuery(this.state.queryTerm,
        this.state.startYear, this.state.endYear)

        .then(data => {
            if (data != this.state.results){
                this.setState({results:data})
            }
        }).then(this)
    }
}

setQuery = (newQuery, newStart, newEnd) => {
    this.setState ({
        queryTerm: newQuery,
        startYear: newStart,
        endYear: newEnd
    })
}



render() {
return (
    <Container fluid>
   
        <Query updateSearch={this.setQuery} />
        <Results results={this.state.results} />
</Container>
    )
  }
}   

export default Search;