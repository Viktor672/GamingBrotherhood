import { createContext } from 'react';

export let UserContext = createContext({
    username: '',
    email: '',
    id: '',
    accessToken: '',
    setUserHandler: () => null
}); 