import React from 'react';

function User(props) {
    return (
        <div id={'user'}>
            <img src={props.user.picture.large} alt={'user portrait'}/>
            <div id={'data'}>
                {props.user.name.first[0].toUpperCase()}{props.user.name.first.slice(1)}{' '}
                {props.user.name.last[0].toUpperCase()}{props.user.name.last.slice(1)}
            </div>
            <div>
                {props.user.email}
            </div>
        </div>
    );
}

export default User;
