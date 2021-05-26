import React, {Component} from 'react';
import {Link} from "react-router-dom";
import MyComponent from "./translator";
import i18n from "i18next";

let personArrayRu = [
    "Ольгерд Обухович",
    "Янка Купала",
    "Якуб Колас",
    "Максим Танк",
    "Рыгор Бородулин"
];

let personArrayEn = [
    "Algerd Obukhovich",
    "Yanka Kupala",
    "Yakub Kolas",
    "Maxim Tank",
    "Rygor Borodulin"
];

let personArr = [
    "obuhovich",
    "kupala",
    "kolas",
    "tank",
    "baradulin"
];

export class Search extends Component {
    render() {
        return <div>
            <div className="list-group authors-list" id="box">
                {showAll()}
            </div>
        </div>
    }
}

function showPersons() {
    const inputString = document.getElementById("inputString").value;
    if (isEmpty(inputString)) {
        //alert("Введенные данные пусты!");
        return showAll();
    }
    alert(i18n.language);
    let isSelected = false;
    let box = document.getElementById('box');
    box.innerHTML = '';
    let personArray = [];
    switch(i18n.language){
        case 'en':
            personArray = personArrayEn;
            break;
        case 'ru':
            personArray = personArrayRu;
            break;
    }
    for (let index = 0; index < personArray.length; index++) {
        let link = "/author" + (index + 1);
        alert(personArray[index]);
        if (personArray[index].slice(0, personArray[index].indexOf(" ", 0)).includes(inputString)) {
            isSelected = true;
            box.innerHTML
                += "<a class=\"authors-list-a list-group-item list-group-item-action\" aria-current=\"page\" href=\"" + link + "\" id=\"" + (index + 1) + "\">" + personArray[index] + "</a>"
        }
    }
    if(!isSelected){
        box.innerHTML = "<p>Ничего не найдено!</p>";
    }
}

function showAll() {
    const inputString = document.getElementById("inputString");
    let box = document.getElementById('box');
    if (box != null && inputString !== null) {
        let personArray = [];
        switch(i18n.language){
            case 'en':
                personArray = personArrayEn;
                break;
            case 'ru':
                personArray = personArrayRu;
                break;
        }
        box.innerHTML = '';
        for (let index = 0; index < personArray.length; index++) {
            let link = "/author" + (index + 1);
            let person = personArray[index];
            box.innerHTML +=
                "<a class=\"authors-list-a list-group-item list-group-item-action\" aria-current=\"page\" href=\"" + link + "\" id=\"" + (index + 1) + "\">" + person + "</a>"
        }
        return "";
    } else {
        return <div>
            <Link className="authors-list-a list-group-item list-group-item-action" name="test"  aria-current="page" href="#" id="1" to="/author1"><MyComponent text="obuhovich"/></Link>
            <Link className="authors-list-a list-group-item list-group-item-action" href="#" id="2" to="/author2"><MyComponent text="kupala"/></Link>
            <Link className="authors-list-a list-group-item list-group-item-action" href="#" id="3" to="/author3"><MyComponent text="kolas"/></Link>
            <Link className="authors-list-a list-group-item list-group-item-action" href="#" id="4" to="/author4"><MyComponent text="tank"/></Link>
            <Link className="authors-list-a list-group-item list-group-item-action" href="#" id="5" to="/author5"><MyComponent text="baradulin"/></Link>
        </div>
    }

}

function isEmpty(str) {
    return str.trim() === '' || false;
}

export default showPersons;