import { useActionState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { UserContext } from '../contexts/UserContext';
import { useAuth } from '../apiHooks/authApi';

export default function LoginPage() {
    let { login } = useAuth();
    let navigate = useNavigate();
    let { setUserHandler } = useContext(UserContext);

    let loginHandler = async (state, formData) => {
        let formDataValues = Object.fromEntries(formData);
        let data = await login(formDataValues.email, formDataValues.password);
        setUserHandler(data);

        navigate('/games');
    }

    let [state, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

    return (
        <div className="auth-page">
            <form className="form" action={loginAction}>
                <b><p>Login to Your Account</p></b>
                <br />
                <input className="auth-input" type="email" id="email" name="email" placeholder="Email" />
                <input className="auth-input" type="password" id="password" name="password" placeholder="Password" />
                <input className="auth-btn-submit" type="submit" value="Login" disabled={isPending} />
                <p className="message">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}
