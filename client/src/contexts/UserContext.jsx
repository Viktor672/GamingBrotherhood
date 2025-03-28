import { createContext, useState, useEffect } from "react";

export let UserContext = createContext();

export let UserProvider = ({ children }) => {
    let [user, setUser] = useState(() => {
        let savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.clear();
        }
    }, [user]);

    let logoutHandler = () => {
        setUser(null);
    };

    let setUserHandler = (data = {}) => {
        setUser(data);
    };

    return (
        <UserContext.Provider value={{ ...user, setUserHandler, logoutHandler }}>
            {children}
        </UserContext.Provider>
    );
};