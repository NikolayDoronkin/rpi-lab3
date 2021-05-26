import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import {Button, Form, FormControl} from "react-bootstrap";
import showPersons from "./search";

import MyComponent from "./translator";

export class SearchHeader extends Component{
    render(){
        return <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
            <div className="container-fluid">
                <Link className="navbar-brand" aria-current="page" href="#" id="" to="/home"><i className="fas fa-pen-nib"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#" id="about" to="/home"><MyComponent text="header.home"/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="#" id="about" to="/search"><MyComponent text="header.authors"/></Link>
                        </li>
                    </ul>
                    <Form inline className="d-flex search-form">
                        <FormControl id="inputString" type="text" placeholder="..." className="mr-sm-2" />
                        <Button variant="outline-success" onClick={showPersons}><MyComponent text="search"/></Button>
                    </Form>
                </div>
            </div>
        </nav>
    }
}
