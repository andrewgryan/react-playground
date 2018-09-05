'use strict';

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Alice" />
            <Welcome name="Bob" />
            <Welcome name="Sarah" />
            <Welcome name="Steve" />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
