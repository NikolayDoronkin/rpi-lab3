import React, {Component} from 'react';

import {Carousel} from "react-bootstrap";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import timelineArray from "../timelineElement";
import personData from "../personData";
import imagesPerson from "./imageStore";
import MyComponent from "./translator";


export class Author extends Component {


    render() {

        let BornIconStyle = {background: "#06D6A0"};
        let LiveIconStyle = {background: "#ffbf19"};
        let DeathIconStyle = {background: "#6c1212"};

        let timelineElement = Array.from(timelineArray)[this.props.timeline];
        let personDataElement = Array.from(personData)[this.props.timeline];
        let images = Array.from(imagesPerson)[this.props.timeline];

        return <div>
            <div className="container author-info w-75 ">
                <div className="row">
                    <div className="col-7">
                        <h3 className="author-name"><MyComponent text={personDataElement.name}/></h3>
                        <p className="lifetime"><MyComponent text={personDataElement.period}/></p>
                    </div>
                    <div className="col">
                        <img src={images[0]} height="500" alt=" "/>
                    </div>
                </div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide works w-75" data-bs-ride="carousel">
                <div className="carousel-inner" style={{paddingBottom: "100px"}}>
                    <Carousel controls={true} indicators={true}>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={images[1]}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={images[2]}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000} >
                            <img
                                className="d-block w-100"
                                src={images[3]}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
           {/* <div id="carouselExampleDark" className="carousel carousel-dark slide w-75 works" data-bs-ride="carousel">
                <h2>Вершы</h2>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
    aria-current="true" aria-label="Slide 1"/>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
    aria-label="Slide 2"/>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
    aria-label="Slide 3"/>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={images[1]} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={images[2]} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={images[3]} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>*/}
            <VerticalTimeline>
                {
                    timelineElement.map((element) => {
                        let style;
                        switch (element.icon){
                            case "born":
                                style = BornIconStyle;
                                break;
                            case "live":
                                style = LiveIconStyle;
                                break;
                            case "death":
                                style = DeathIconStyle;
                                break;
                            default:
                                style = null;
                        }
                        return (
                            <VerticalTimelineElement
                                key={<MyComponent text={element.id}/>}
                                date={<MyComponent text={element.date}/>}
                                dateClassName="date"
                                iconStyle={style}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {<MyComponent text={element.title}/>}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {<MyComponent text={element.location}/>}
                                </h5>
                                <p id="description">{<MyComponent text={element.description}/>}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>

            <iframe className="video" src={personDataElement.video} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

            <div className="w-75 map-wrap">
                <h2 className="map-h2"><MyComponent text="birth"/></h2>
                <iframe className="map"
                        src={personDataElement.map}
                        style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
            </div>


        </div>
    }
}