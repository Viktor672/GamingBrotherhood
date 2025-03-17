import { Link } from 'react-router';  

export default function LoginPage() {
    return (
        <div className="auth-page">
            <div className="form">
                <b><p>Login to Your Account</p></b>
                <br />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <p className="message">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
}
