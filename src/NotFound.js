import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>this page doesnt exist</p>
      <Link className='back-to-home' to='/'>
        back to homepage...
      </Link>
    </div>
  );
};

export default NotFound;
