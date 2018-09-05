'use strict';
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
};
const user = {
    firstName: "Bob",
    lastName: "Martin"
};
const element = <h1>Hello, { formatName(user) }!</h1>;
ReactDOM.render(element, document.querySelector('#hello'));
