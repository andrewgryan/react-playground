'use strict';

const formatDate = function(text) {
    return text;
};

const Avatar = function(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
};

const Comment = function(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                     {props.author.name}
                </div>
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    );
};

const author = { name: 'Andy', avatarUrl: 'image.png'};
function App() {
    return (
        <div>
            <Comment author={author}
                     text="Lorem ipsum"
                     date="2018-01-01 00:00:00" />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
