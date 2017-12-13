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
        savedArticles: [],
       
    };

    
render () {
    return this.state.savedArticles.map((article, index) =>  {

        return (     
             <div key={index}>
                <li className="list-group-item">
                <h3>
                <span>
                  <em>{article.title}</em>
                 </span>
                 <span className="btn-group pull-right">
                    <a href={article.url} rel="noopener noreferrer" target="_blank">
                        <button className="btn btn-default ">View Article</button>
                     </a>
                        <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete</button>
                 </span>
                </h3>
                <h3>No Saved Articles to Display</h3>
                </li>
             </div>
             )
        })
    }
}


export default Save;


