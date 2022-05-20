'use strict' 

const input = document.getElementById("input")
const input2 = document.getElementById("input2")
const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")

const list = document.getElementById("list")

// Addition

let addition = (a, b) => {
    let c = Number(a) + Number(b);

    let child = document.createElement(`li`);
    child.innerHTML = `${a} + ${b} = ${c}`;
    list.appendChild(child);

    console.log(c);
    return c;
}

add.onclick = () => addition(input.value, input2.value);

// Subtraction

let subtraction = (a, b) => {
    let c = Number(a) - Number(b);

    let child = document.createElement(`li`);
    child.innerHTML = `${a} - ${b} = ${c}`;
    list.appendChild(child);

    console.log(c);
    return c;
}

subtract.onclick = () => subtraction(input.value, input2.value);

// Multiplication

let multiplication = (a, b) => {
    let c = Number(a) * Number(b);

    let child = document.createElement(`li`);
    child.innerHTML = `${a} &times; ${b} = ${c}`;
    list.appendChild(child);

    console.log(c);
    return c;
}

multiply.onclick = () => multiplication(input.value, input2.value);

// Division

let division = (a, b) => {
    let c = Number(a) / Number(b);

    let child = document.createElement(`li`);
    child.innerHTML = `${a} &divide; ${b} = ${c}`;
    list.appendChild(child);

    console.log(c);
    return c;
}

divide.onclick = () => division(input.value, input2.value);

