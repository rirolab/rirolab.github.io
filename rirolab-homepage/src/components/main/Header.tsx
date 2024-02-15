'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaX } from 'react-icons/fa6';

const Header: React.FC = () => {
  const MENU = ['News', 'Research', 'Publications', 'People', 'Positions'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleMenuClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full min-h-12 md:h-14 bg-white shadow-md"
      style={{ boxShadow: '0 2px #70aad0' }}>
      <div className="w-full h-full md:w-3/5 md:min-w-[768px] mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="w-[120px] h-[40px] md:w-[144px] md:h-[48px] flex items-center">
          <div className="relative w-full h-full">
            <Image src="/images/logo.png" alt="Logo" fill objectFit="contain" />
          </div>
        </Link>

        {/* MENU - DESKTOP */}
        <nav className="hidden md:w-[480px] md:flex md:items-center md:justify-between">
          {MENU.map((menu) => (
            <Link
              key={menu}
              href={`/${menu.toLowerCase()}`}
              className="block text-mainColor text-lg hover:text-mainColor-dark hover-underline">
              {menu}
            </Link>
          ))}
        </nav>

        {/* MENU - MOBILE */}
        <div className="w-4 h-4 md:hidden">
          <button onClick={toggleMobileMenu} className="text-mainColor">
            {isMobileMenuOpen ? <FaX /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full h-[200px] px-4 flex flex-col justify-evenly">
          {/* Mobile Menu Items */}
          {MENU.map((menu) => (
            <Link
              key={menu}
              href={`/${menu.toLowerCase()}`}
              onClick={handleMenuClick}
              className="block text-mainColor text-lg">
              {menu}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
