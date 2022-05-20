'use strict'

// Addition

let addition = (a, b) => {
    let c = Number(a) + Number(b);

    let child = document.createElement(`li`);
    child.innerHTML = `${a} + ${b} = ${c}`;
    list.appendChild(child);

    console.log(c);
    return c;
}

// Subtraction

let subtraction = (a, b) => {
    let c = Number(a) - Number(b);

    let child = document.createElement(`li`);
    child.innerHTML = `${a} - ${b} = ${c}`;
    list.appendChild(child);

    console.log(c);
    return c;
}

// Multiplication

let multiplication = (a, b) => {
    let c = Number(a) * Number(b);

    let child = document.createElement(`li`);
    child.innerHTML = `${a} &times; ${b} = ${c}`;
    list.appendChild(child);

    console.log(c);
    return c;
}

// Division

let division = (a, b) => {
    let c = Number(a) / Number(b);

    let child = document.createElement(`li`);
    child.innerHTML = `${a} &divide; ${b} = ${c}`;
    list.appendChild(child);

    console.log(c);
    return c;
}