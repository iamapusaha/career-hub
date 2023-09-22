import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-5xl'>404 page not found</h1>
            <Link to='/'><button className='btn btn-secondary'>please got back to home</button></Link>
        </div>
    );
};

export default ErrorPage;