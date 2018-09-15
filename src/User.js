import React from 'react';

function User(props) {

    return (
        <div>
            <div>
                {props.user.name.first[0].toUpperCase()}{props.user.name.first.slice(1)}{' '}
                {props.user.name.last[0].toUpperCase()}{props.user.name.last.slice(1)}
            </div>
            <img src={props.user.picture.large}/>
        </div>
    );
}

export default User;
