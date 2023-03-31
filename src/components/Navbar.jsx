{/*Active function not working in tailwind css work on it later*/ }
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import logom from '../assets/M1.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={
        `${styles.paddingX} 
      w-full flex items-center py-5 fixed top-0 z-20 bg-black  `
      }>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/*wondering what these className objects means visit tailwindcss docs they are difficult for u rn but they are pre designed objects */}
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logom} alt='logo' className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Moksh &nbsp;
            <span className='sm:block hidden'> | Baweja</span>




          </p>


        </Link>
        <ul className='list-none hidden sm:flex
        flex-row gap-12'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}

              className={`${active === Link.title
                ? "text-white"
                : "text-secondary"}
              hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}

            >
              <a href={
                `#${Link.id}`}>{Link.title}</a>
            </li>

          ))}

        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu}
            className='w-[28px] h-[28px] object-contain'
            alt='menu'
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden'
            : 'flex'} p-6 black-gradient absolute top-20 
          right-0 mx-4 my-2 min-w-[160px]  z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-5'>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}

                  className={`${active === Link.title
                    ? "text-white"
                    : "text-secondary"}
                    font-poppins font-medium
              hover:text-white text-[18px] cursor-pointer `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }
                  }
                >
                  <a href={
                    `#${Link.id}`}>{Link.title}</a>
                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>
    </nav >

  )
}

export default Navbar