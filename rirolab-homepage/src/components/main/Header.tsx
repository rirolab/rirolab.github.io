'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import useIsMobile from 'src/utils/useIsMobile';
import styles from 'src/styles/main/Header.module.css';
import MenuItems from 'src/components/main/MenuItems';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      {/* 좌측 로고 */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={isMobile ? '/images/logo_small.png' : '/images/logo.png'}
            alt="Logo"
            width={isMobile ? 50 : 100}
            height={isMobile ? 50 : 100}
          />
        </Link>
      </div>

      {/* 우측 메뉴 */}
      <nav className={styles.nav}>
        {isMobile ? (
          <div className={styles.hamburgerMenu} onClick={toggleMenu}>
            <FaBars />
          </div>
        ) : (
          <MenuItems />
        )}
      </nav>

      {/* 햄버거 버튼 클릭 시 메뉴 */}
      {isMobile && menuOpen && (
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
          <MenuItems />
        </div>
      )}
    </header>
  );
};

export default Header;
