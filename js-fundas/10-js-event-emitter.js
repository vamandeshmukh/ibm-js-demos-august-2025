console.log("10-js-event-emitter.js");

import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('hello', (name) => {
    // setTimeout(() => {
    console.log(`Hello, ${name}!`);
    return new Promise((res, rej) => { res({ data: "Sonu" }) })
    // }, 2000);
});

myEmitter.on('hello2', (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.emit('hello', 'Sonu');
myEmitter.emit('hello2', 'Monu');
myEmitter.emit('hello3', 'Tonu');

// =======================
// try to do this -
// capstone project --
// chat bw rider and driver
// =======================

