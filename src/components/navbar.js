import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import { IconContext } from 'react-icons';

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='nav-menu active'>
          <ul className='nav-menu-items' >
            <a class="navbar-brand" href="#"><img style={{margin:'0 0 0 30px'}} className='img-fluid' src={process.env.PUBLIC_URL + './techokids.png'} width='70%' alt='Techokids' /></a>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;