import React from 'react';

function Button(props) {

    return (
        <button
            onClick={() => props.loadNewUser()}
            className={'btn btn-info'}
        >Load New User</button>
    );
}

export default Button;
