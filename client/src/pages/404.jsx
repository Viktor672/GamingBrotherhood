import { Link } from 'react-router';

export default function NotFound() {
    return (
        <main className="not-found-container">
            <div className="text-center">
                <div className="content-wrapper">
                    <p className="error-code">404</p>
                    <h1 className="title">Page not found</h1>
                    <p className="message">
                        Sorry, we could not find the page you are looking for.
                    </p>
                </div>
                <div className="actions">
                    <Link to="/" className="go-home-button" aria-label="Go back home">
                        Go back home
                    </Link>
                    <Link to="/games" className="go-to-games" aria-label="Go see games">
                        Go see games <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
