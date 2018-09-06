'use strict';
const NumberList = function(props) {
    const li = props.numbers.map((n) => <li key={n.toString()}>{n}</li>);
    return (
        <ul>
          {li}
        </ul>
    );
};
const App = function() {
    const numbers = [1, 2, 3, 4, 5];
    return <NumberList numbers={numbers} />;
};
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
