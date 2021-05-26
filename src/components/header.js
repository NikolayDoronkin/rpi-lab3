import React, {Component} from 'react';
import {Trans, useTranslation} from "react-i18next";
import '../i18next';

import {
    Link
} from "react-router-dom";
import i18n from "i18next";
import {Button} from "react-bootstrap";
import MyComponent from "./translator";

export class Header extends Component {

    render() {

        return <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
            <div className="container-fluid">
                <Link className="navbar-brand" aria-current="page" href="#" id="" to="/home"><i
                    className="fas fa-pen-nib"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#" id="about" to="/home">
                                <MyComponent text="header.home"/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="#" id="about" to="/search">
                                <div>
                                    <MyComponent text="header.authors"/>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="#" id="about" to="/creators">
                                <MyComponent text="header.creators"/>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item language-nav">
                            <Button className="nav-link active" aria-current="page"
                                    onClick={() => changeLanguage("en")}>EN</Button>
                        </li>
                        <li className="nav-item language-nav localization separator">
                            <Button className="nav-link" onClick={() => changeLanguage("ru")}>RU</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}

const changeLanguage = (language) => {
    i18n.changeLanguage(language)
}
