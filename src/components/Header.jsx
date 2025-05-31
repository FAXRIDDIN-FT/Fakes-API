import React, { useEffect, useState } from 'react';
import { headerRouteLinks } from "../static";
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../context';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [state] = useStateValue();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all  duration-300 ${
        scrolled
          ? 'bg-[#0e1015]/80 backdrop-blur-md shadow-md'
          : 'bg-[#0e1015]'
      }`}
    >
      <div className="container mx-auto px-4  ">
        <nav className="flex items-center justify-between h-[60px]">
          <div className="text-white font-bold text-lg">Storé</div>

          <ul className="flex items-center gap-6">
            {headerRouteLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.route}
                  className={({ isActive }) =>
                    `relative text-sm text-white font-medium hover:text-blue-400 transition-colors duration-150 pb-1 ${
                      isActive ? 'text-blue-500' : ''
                    }`
                  }
                >
                  <span className="inline-block">{item.title}</span>

            
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />

                  {/* Cart badge */}
                  {item.id === 5 && (
                    <div className="absolute -top-2 -right-3 bg-blue-600 text-white text-[10px] px-1.5 py-[2px] rounded-full shadow-md">
                      {state.cart.length}
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
