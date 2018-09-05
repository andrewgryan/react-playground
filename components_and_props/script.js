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


const UserInfo = function(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                 {props.user.name}
            </div>
        </div>
    );
};


const Comment = function(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
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
