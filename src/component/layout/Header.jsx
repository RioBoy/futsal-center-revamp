import { useState } from 'react';
import Button from '../general/Button';

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [stickyClass, setStickyClass] = useState('relative');

  return (
    <header
      className={[
        'top-0 left-0 w-full flex items-center border-b-2 border-divider',
        stickyClass,
      ].join(' ')}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-0">
            <Button
              type="link"
              href="/"
              className="font-medium text-xl md:text-[26px] text-primary block py-5"
            >
              Futsalcenter
            </Button>
          </div>
          <div className="flex items-center px-0">
            <Button
              type="button"
              onClick={() => setToggleNav(!toggleNav)}
              className={[
                'block absolute right-0 lg:hidden',
                toggleNav ? 'hamburger-active pl-2' : '',
              ].join(' ')}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </Button>

            <nav
              id="nav-menu"
              className={[
                'absolute py-5 bg-white shadow-lg rounded-bl-lg rounded-br-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none',
                toggleNav ? 'block z-50' : 'hidden',
              ].join(' ')}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Button
                    type="link"
                    href="/"
                    className="text-base text-primary py-2 mx-4 flex group-hover:text-purple-500 group-hover:underline"
                  >
                    Beranda
                  </Button>
                </li>
                <li className="group">
                  <Button
                    type="link"
                    href="/about"
                    className="text-base text-primary py-2 mx-4 flex group-hover:text-purple-500 group-hover:underline"
                  >
                    Tentang Kami
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
