'use strict';
const name = "Bob";
const element = <h1>Hello, { name }!</h1>;
ReactDOM.render(element, document.querySelector('#hello'));
