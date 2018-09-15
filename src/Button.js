import React from 'react';

function Button(props) {

    return (
        <button onClick={() => props.loadNewUser()}>Load New User</button>
    );
}

export default Button;
