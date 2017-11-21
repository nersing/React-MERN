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
        article:{}
       
    };


handleClick = (item, event) => {
    API.runQuery()
    .then(data => {setState: this.data})
   
}

 render () {
    return (
        <Row>
        <Col size="md-12">
        
        <div className="card">
        <div className="card-header">Results</div>
        <div className="card-body">
            {this.state.article.length ? (
                <List>
                    {this.state.article.map(article => {
                        return(
                        <ListItem 
                            key={article.title}
                            title={article.title}
                            url={article.url} />
                    );
                        <SaveBtn onClick={() => this.postSaved(article.title)} />
                        
                    
                } )}
                }
                </List>
            ) : (
                <h3>No Results to Display</h3>
            )
                }
        </div>
        </div>
    </Col>
    </Row>

 )
}
}

export default Results;
