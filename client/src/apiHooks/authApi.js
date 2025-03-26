import { useContext, useRef } from "react";
import { handleRequest } from "../utils/handlerequest";
import { UserContext } from '../contexts/UserContext';

let baseUrl = 'http://localhost:3030/users';

export let useAuth = () => {
    let { accessToken, setUserHandler } = useContext(UserContext);

    let login = async (email, password) => {
        let data = await handleRequest(`${baseUrl}/login`, 'POST', { email, password });

        if (!data) {
            return { error: 'Email or password is incorrect!' };
        }

        return data;

    };

    let register = async (email, password, rePassword) => {
        if (password !== rePassword) {
            return { error: 'Passwords mismatch!' };
        }

        let data = await handleRequest(`${baseUrl}/register`, 'POST', { email, password, rePassword });

        if (!data) {
            return { error: 'Register failed!' };
        }

        return data;

    };

    let logout = async () => {
        if (!accessToken) return;

        try {
            await handleRequest(`${baseUrl}/logout`, 'GET', {}, {
                headers: { 'X-Authorization': accessToken }
            });

            setUserHandler({});
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return {
        login,
        register,
        logout,
        isLoggedOut: !Boolean(accessToken)
    };
};
