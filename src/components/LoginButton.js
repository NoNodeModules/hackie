import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button class="button" onClick={() => loginWithRedirect()}>
            Log In
        </button>
    )
}

export default LoginButton