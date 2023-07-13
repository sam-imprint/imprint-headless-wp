import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import { Container, NavigationMenu, SkipNavigationLink, ContactModal, MenuModal } from '../../components';
import styles from './Header.module.scss';
import { FaBars } from 'react-icons/fa';

let cx = classNames.bind(styles);

export default function Header({ menuItems }) {
  const [isNavShown, setIsNavShown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const button = ref.current.querySelector('.contact_btn');
    if (button) {
      const handleOpenModal = () => {
        setIsModalOpen(true);
      };
      button.addEventListener('click', handleOpenModal);

      // Clean up function
      return () => {
        button.removeEventListener('click', handleOpenModal);
      };
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cx('component')} ref={ref}>
      <SkipNavigationLink />
      <Container>
        <div className={cx('navbar')}>
          <div className={cx('brand')}>
            <Link href="/">
              <a className={cx('title')}>
                <Image
                  src="https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/03/ID-Logo-LG.png"
                  alt="Imprint Digital"
                  width="173"
                  height="29"
                  priority={true}
                />
              </a>
            </Link>
          </div>
          <NavigationMenu
            className={cx(['primary-navigation', isNavShown ? 'show' : undefined])}
            menuItems={menuItems}
          />
          <button className={cx('menu_btn')}>
          <FaBars onClick={handleMenuOpen} size='2x' />
          </button>
        </div>
      </Container>
      <MenuModal menuItems={menuItems} isMenuOpen={isMenuOpen} onRequestClose={handleMenuClose} />
      <ContactModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </header>
  );
}
