import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredenctials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredenctials() );

    }
}

export const startGoogleSignIn = () => {

    return async ( dispatch ) => {

        dispatch ( checkingCredenctials() );

        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ));
    }
}