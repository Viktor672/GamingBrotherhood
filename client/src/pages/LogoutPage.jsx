import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../contexts/UserContext';

export default function LogoutPage() {
    let { logoutHandler } = useContext(UserContext);
    let navigate = useNavigate();

    useEffect(() => {
        logoutHandler();
        navigate('/');
    }, [logoutHandler, navigate]);

}
