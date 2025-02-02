/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here
function replaceText(elem, str) {   //1: sets str as elem's content
    elem.textContent = str;
}

function addTextTo(elem, str) {     //2: appends str onto elem's content
    elem.append(str);
}

function moreBears() {  //3: change animal img + details to a bear
    let animalImg = document.querySelector("#animals");
    animalImg.src = "http://placebear.com/400/200";
    animalImg.alt = "A bear.";
    animalImg.title = "A BEAR!";
}

function setId(elem, str) {     //4: set str value as elem's id  
    elem.id = str;
    return elem;
}

function setClass(elem, str) {      //5: set str value as elem's class
    elem.className = str;
    return elem;
}

function addAClass(elem, str) {     //6: add str as one of elem's classes
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str) {      //7: remove str as one of elem's classes
    elem.classList.remove(str);
    return elem;
}

function newElement(name) {     //8: create a new element
    return document.createElement(name);
}

function findElementById(id) {      //9: returns element with given id
    return document.querySelector(`#${id}`);
}

function findElementsByQuery(query) {      //10: returns elementS with given query
    return document.querySelectorAll(query);
}

function reverseList(query) {      //11: reverse's the lists contents
    let list = document.querySelector(query);
    let items = Array.from(list.children);
    items.reverse();
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
    return list;
}

function mover(moveThis, appendToThis) {      //12: append moveThis to appendToThis
    let moveThisThing = document.querySelector(moveThis);
    let appendToThisThing = document.querySelector(appendToThis);

    appendToThisThing.append(moveThisThing);
}

function filler(list, candidates) {      //13: adds each candidate as a list element into the list
    candidates.forEach(candidate => {
        let li = document.createElement("li");
        li.textContent = candidate;
        list.appendChild(li);
    })
}

function dupe(selector) {      //14: duplicates elements identified by selector
    let elem = document.querySelector(selector);
    let clonedElem = elem.cloneNode(true);
    elem.parentNode.appendChild(clonedElem);
}

function removeAll(selector) {      //15: removes all nodes that match selector
    let nodes = document.querySelectorAll(selector);
    nodes.forEach(node => {
        node.remove();
    });
}

function getUserData() {      //16: takes the attributes by id and returns them formatted
    let name = document.querySelector("#username").value;
    let speed = document.querySelector("#speed").value;
    let student = document.querySelector("#student").checked;

    return {
        name: name,
        speed: parseInt(speed),
        student: student
    };
}
