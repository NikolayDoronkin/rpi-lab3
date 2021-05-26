import React, { Component } from 'react';

import kolya from '../images/kolya.JPG'
import katya from '../images/kate.jpg'

import main1 from '../images/main-bg1.jpg'
import main2 from '../images/main-bg2.jpg'
import main3 from '../images/main-bg3.jpg'

import about from '../images/about-image.jpg'

import kupala from '../images/second.jpg'
import {Carousel} from "react-bootstrap";

import MyComponent from "./translator";
import i18n from "i18next";
import {Link} from "react-router-dom";


export class Main extends Component{
    render() {
        return<div>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={main1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={main2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={main3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <h1><MyComponent text="main.label"/></h1>
            <div className="container about w-75">
                <div className="row">
                    <div className="col-7 about-text">
                        <h2><MyComponent text="main.about"/></h2>
                        <p><MyComponent text="main.about1"/></p>
                        <p><MyComponent text="main.about2"/></p>
                    </div>
                    <div className="col about-image">
                        <img src={about} alt=""/>
                    </div>
                </div>
            </div>

            <div className="container author-of-day w-75">
                <div className="row">
                    <div className="col">
                        <h2><MyComponent text="main.author_label"/></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col author-of-day-image">
                        <img src={kupala} height="500" alt=""/>
                    </div>
                    <div className="col-7 author-of-day-info">
                        <h3><MyComponent text="kupala"/></h3>
                        <p className="lifetime">1882-1942</p>
                        <p><MyComponent text="main.fact"/></p>
                        <Link className="read-more-link" href="#" id="2" to="/author2"><MyComponent text="main.readmore"/></Link>
                        {/*<a href="#" className="read-more-link"></a>*/}
                    </div>
                </div>
            </div>

            <div className="container w-75 creators" id="creators-block">
                <h2><MyComponent text="main.developers"/></h2>
                <div className="row">
                    <div className="col">
                        <div className="card creator-card bg-dark" style={{width: "18rem", color: "white"}}>
                            <img src={kolya} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title"><MyComponent text="kolya"/></h5>
                                    <p><MyComponent text="main.desc"/></p>
                                    <a href="https://github.com/NikolayDoronkin" className="btn btn-primary git-button">GitHub</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card creator-card bg-dark" style={{width: "18rem", color: "white"}}>
                            <img src={katya} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title"><MyComponent text="katya"/></h5>
                                    <p><MyComponent text="main.desc"/></p>
                                    <a href="https://github.com/KateKhodko" className="btn btn-primary git-button">GitHub</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

const changeLanguage = (language) => {
    i18n.changeLanguage(language)
}

