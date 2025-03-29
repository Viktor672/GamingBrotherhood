import { useActionState, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { UserContext } from '../contexts/UserContext';
import { useAuth } from '../apiHooks/authApi';

export default function LoginPage() {
    let { login } = useAuth();
    let navigate = useNavigate();
    let { setUserHandler } = useContext(UserContext);
    let [isPending, setIsPending] = useState(false);
    let [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    let changeHandler = (e) => {
        let { name, value } = e.target;

        setFormData(oldState => ({ ...oldState, [name]: value }));
    }

    let loginHandler = async (e) => {
        e.preventDefault();

        setIsPending(true);
        let data = await login(formData.email, formData.password);
        setIsPending(false);

        if (data?.error) {
            alert(data.error);
            setFormData({ email:formData.email, password: '' });
            return;
        }

        setUserHandler(data);

        return navigate('/games');
    }

    return (
        <div className="auth-page">
            <form className="form" onSubmit={loginHandler}>
                <b><p>Login to Your Account</p></b>
                <br />
                <input className="auth-input" type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={changeHandler} />
                <input className="auth-input" type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={changeHandler} />
                <input className="auth-btn-submit" type="submit" value="Login" disabled={isPending} />
                <p className="message">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}
