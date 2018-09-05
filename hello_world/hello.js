'use strict';
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
};
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, stranger!</h1>;
};
const user = {
    firstName: "Bob",
    lastName: "Martin"
};
const element = getGreeting(user);
ReactDOM.render(element, document.querySelector('#hello'));
