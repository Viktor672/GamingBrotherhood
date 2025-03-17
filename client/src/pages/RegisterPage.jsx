import { Link } from 'react-router';  // ✅ Correct import for Link

export default function RegisterPage() {
    return (
        <div className="auth-page">
            <div className="form">
                <b><p>Register to Your Account</p></b>
                <br />
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="rePassword" placeholder="Repeat Password" />
                <button>Login</button>
                <p className="message">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}
