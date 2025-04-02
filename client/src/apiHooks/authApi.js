import { useContext, useEffect, useRef } from "react";
import { handleRequest } from "../utils/handlerequest";
import { UserContext } from '../contexts/UserContext';

let baseUrl = 'http://localhost:3030/users';

export let useAuth = () => {
    let { accessToken, setUserHandler } = useContext(UserContext);
    let abortControllerRef = useRef(new AbortController());

    let login = async (email, password) => {
        let data = await handleRequest(`${baseUrl}/login`, 'POST', { email, password }, { signal: abortControllerRef.current.signal });

        if (!data) {
            return { error: 'Email or password is incorrect!' };
        }

        return data;
    };

    let register = async (email, password, rePassword) => {
        if (password !== rePassword) {
            return { error: 'Passwords mismatch!' };
        }

        let data = await handleRequest(`${baseUrl}/register`, 'POST', { email, password, rePassword }, { signal: abortControllerRef.current.signal });

        if (!data) {
            return { error: 'Register failed!' };
        }

        return data;

    };

    let logout = async () => {
        if (!accessToken) return;

        try {
            await handleRequest(`${baseUrl}/logout`, 'GET', {}, {
                headers: { 'X-Authorization': accessToken },
                signal: abortControllerRef.current.signal
            });

            setUserHandler({});
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    useEffect(() => {
        let abortController = abortControllerRef.current;

        return () => {
            abortController.abort();
            abortControllerRef.current = new AbortController();
        };
    }, []);


    return {
        login,
        register,
        logout,
        isLoggedOut: !Boolean(accessToken)
    };
};
