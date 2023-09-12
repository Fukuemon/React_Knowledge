import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointers">
            <h1 className="flex justify-center w-full">
              <Link to={''} aria-label="Instagram logo">
                <button type="button" className="flex justify-center w-fulls">
                  MeAR
                </button>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
