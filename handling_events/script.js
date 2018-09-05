'use strict';
const handleClick = function(e) {
    e.preventDefault();
    console.log("The link was clicked");
};
const App = function() {
    return (
        <a href="#" onClick={handleClick}>Click me!</a>
    );
};
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
