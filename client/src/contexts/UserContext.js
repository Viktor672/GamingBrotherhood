import { createContext } from 'react';

export let UserContext = createContext({
    username: '',
    email: '',
    _id: '',
    accessToken: '',
    setUserHandler: () => null
}); 