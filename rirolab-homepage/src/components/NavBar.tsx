'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface NavBarProps {
    root: string;
    menu: string[];
}

const NavBar: React.FC<NavBarProps> = ({ root, menu }) => {
  // 상태 관리를 위한 React State 추가
  const [selected, setSelected] = useState(menu.length > 0 ? menu[0] : '');

  return (
    <div className="w-full flex justify-evenly items-center my-4 gap-x-2 md:gap-x-4">
      {menu.map((menuItem) => (
        <Link
          key={menuItem}
          href={`/${root.toLowerCase()}/${menuItem.toLowerCase()}`}
          passHref
          className={`block flex-1 text-center p-2 rounded-lg border-solid border-2 border-mainColor ${selected === menuItem ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white transition duration-300`}
          onClick={() => setSelected(menuItem)}>
          {menuItem.charAt(0).toUpperCase() + menuItem.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
