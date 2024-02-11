import Link from 'next/link';
import React from 'react';
import styles from 'src/styles/main/MenuItems.module.css';

const MenuItems: React.FC = (): JSX.Element => (
  <ul className={styles.menuItemsList}>
    <li>
      <Link href="/news">News</Link>
    </li>
    <li>
      <Link href="/research">Research</Link>
    </li>
    <li>
      <Link href="/publications">Publications</Link>
    </li>
    <li>
      <Link href="/people">People</Link>
    </li>
    <li>
      <Link href="/positions">Positions</Link>
    </li>
  </ul>
);

export default MenuItems;
