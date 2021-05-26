import './App.css';

import './css/style.css'
import './css/fonts.css'
import './css/search.css'
import './css/author.css'

import './i18next';
import "react-vertical-timeline-component/style.min.css"
import {Header} from './components/header';
import {Main} from './components/main'
import {Search} from './components/search'
import {SearchHeader} from './components/searchHeader'
import {Author} from './components/author'
import {Footer} from './components/footer'
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {FooterSearch} from "./components/footerSearcher";

export class App extends Component {
    render() {
        return <div>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Header/>
                        <Main/>
                        <Footer/>
                    </Route>
                    <Route path="/search">
                        <SearchHeader/>
                        <Search/>
                        <FooterSearch/>
                    </Route>
                    <Route path="/author1">
                        <Header/>
                        <Author timeline={0}/>
                        <Footer/>
                    </Route>
                    <Route path="/author2">
                        <Header/>
                        <Author timeline={1}/>
                        <Footer/>
                    </Route>
                    <Route path="/author3">
                        <Header/>
                        <Author timeline={2}/>
                        <Footer/>
                    </Route>
                    <Route path="/author4">
                        <Header/>
                        <Author timeline={3}/>
                        <Footer/>
                    </Route>
                    <Route path="/author5">
                        <Header/>
                        <Author timeline={4}/>
                        <Footer/>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <Main/>
                        <Footer/>
                    </Route>
                </Switch>
            </Router>
        </div>
    }
}
