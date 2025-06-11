'use client'
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useStyles } from './style/style';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { styles } = useStyles();

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <Link href='/'>Home</Link>,
    },
    {
      key: '2',
      label: <Link href='/login'>Login</Link>,
    },
    {
      key: '3',
      label: <Link href='/registration'>Sign Up</Link>,
    },
  ];

  return (
    <nav className={styles.Navbar}>
      <div className={styles.Logo}>
        <a href="#"><li>Logo</li></a>
      </div>
      <div className={styles.Tabs}>
        <Tabs items={items} onChange={onChange} />
      </div>
    </nav>
  );
};

export default Navbar;
