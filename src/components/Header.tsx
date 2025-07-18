import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-gray-700 border-b border-gray-200 fixed top-0 left-0 z-10 bg-white w-full mx-auto">
      <div className="container flex mx-auto py-3 flex-col md:flex-row items-center">
        <Link to="/" className="flex items-center">
          <div className="w-50h-50">
            <img
              src="/img/react.svg"
              alt="headerLogo"
              style={{ width: '50px', height: '50px' }}
            />
          </div>
          <span className="text-xl ml-3">NaoCode</span>
        </Link>
        <nav className="md:ml-auto text-base">
          <Link to="/" className="mr-5 hover:text-blue-400 duration-300">
            Home
          </Link>
          <Link to="/About" className="mr-5 hover:text-blue-400 duration-300">
            About
          </Link>
          <Link to="/Skills" className="mr-5 hover:text-blue-400 duration-300">
            Skills
          </Link>
          <Link to="/Works" className="mr-5 hover:text-blue-400 duration-300">
            Works
          </Link>
          <Link to="/Contact" className="hover:text-blue-400 duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
