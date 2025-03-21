import { useContext, useEffect, useRef } from "react";
import { handleRequest } from "../utils/handlerequest";
import { UserContext } from '../contexts/UserContext';

let baseUrl = 'http://localhost:3030/users';

export let useAuth = () => {
    let login = async (email, password) => {


        let data = await handleRequest(`${baseUrl}/login`, 'POST', { email, password });
        return data;       //implement abort logic
    }
    let register = async (email, password, rePassword) => {
        if (password !== rePassword) {
            alert('Passwords missmatch!');
            return;
        }

        let data = await handleRequest(`${baseUrl}/register`, 'POST', { email, password, rePassword });
        return data;
    }

    return {
        login,
        register,
    }
}


export let useLogout = () => {
    let { accessToken, setUserHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) return;

        let options = {
            headers: {
                'X-Authorization': accessToken
            }
        };

        handleRequest(`${baseUrl}/logout`, 'GET', {}, options)
            .then(() => setUserHandler({}));

    }, [accessToken, setUserHandler]);

    return {
        isLogged: accessToken ? true : false
    }
}
