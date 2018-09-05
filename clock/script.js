'use strict';
const Clock = function(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
};
const tick = function() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
};
setInterval(tick, 1000);
