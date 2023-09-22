import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>404 page not found</h1>
            <Link to='/'>please got back to home</Link>
        </div>
    );
};

export default ErrorPage;