import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id='header'>
      <ul className='App-header '>
        <li>
          <Link className='App-link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='App-link' to='/create'>
            Create
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
