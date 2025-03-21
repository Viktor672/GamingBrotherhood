import { Link, useNavigate } from 'react-router';
import { useAuth } from '../apiHooks/authApi';
import { useActionState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function RegisterPage() {
    let { register } = useAuth();
    let navigate = useNavigate();
    let { setUserHandler } = useContext(UserContext);

    let registerHandler = async (state, formData) => {
        let formDataValues = Object.fromEntries(formData);

        let data = await register(formDataValues.email, formDataValues.password, formDataValues.rePassword);
        
        setUserHandler(data);

        navigate('/games');
    }

    let [state, registerAction, isPending] = useActionState(registerHandler, { email: '', password: '' });

    return (
        <div className="auth-page">
            <form className="form" action={registerAction}>
                <b><p>Register to Your Account</p></b>
                <br />
                <input className="auth-input" type="email" id="email" name="email" placeholder="Email" />
                <input className="auth-input" type="password" id="password" name="password" placeholder="Password" />
                <input className="auth-input" type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />
                <input className="auth-btn-submit" type="submit" value="Register" disabled={isPending}/>
                <p className="message">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}
