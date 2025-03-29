import { Link, useNavigate } from 'react-router';
import { useAuth } from '../apiHooks/authApi';
import { useActionState, useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function RegisterPage() {
    let { register } = useAuth();
    let navigate = useNavigate();
    let { setUserHandler } = useContext(UserContext);
    let [isPending, setIsPending] = useState(false);
    let [formData, setFormData] = useState({
        email: '',
        password: '',
        rePassword: ''
    });

    let changeHandler = (e) => {
        let { name, value } = e.target;

        setFormData(oldState => ({ ...oldState, [name]: value }));
    }

    let registerHandler = async (e) => {
        e.preventDefault();
        setIsPending(true);
        let data = await register(formData.email, formData.password, formData.rePassword);
        setIsPending(false);
        
        if (data?.error) {
            setFormData({
                email: formData.email,
                password: '',
                rePassword: ''
            });
            return alert(data.error);
        }

        setUserHandler(data);

        navigate('/games');
    }

    return (
        <div className="auth-page">
            <form className="form" onSubmit={registerHandler}>
                <b><p>Register to Your Account</p></b>
                <br />
                <input className="auth-input" type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={changeHandler} />
                <input className="auth-input" type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={changeHandler} />
                <input className="auth-input" type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" value={formData.rePassword} onChange={changeHandler} />
                <input className="auth-btn-submit" type="submit" value="Register" disabled={isPending} />
                <p className="message">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}