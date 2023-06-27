import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.scss';
import { ContactModal } from '../ContactModal';

let cx = classNames.bind(styles);

export default function Header({
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);

   // ContactModal DOM query selector and ref
   const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <header className={cx('component')}  ref={ref}>
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
                    priority='true' />
                  </a>
              </Link>
            </div>
            <button
              type="button"
              className={cx('nav-toggle')}
              onClick={() => setIsNavShown(!isNavShown)}
              aria-label="Toggle navigation"
              aria-controls={cx('primary-navigation')}
              aria-expanded={isNavShown}
            >
              ☰
            </button>
            <NavigationMenu
              className={cx(['primary-navigation', isNavShown ? 'show' : undefined])}
              menuItems={menuItems}
            />
        </div>
      </Container>
      <ContactModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </header>
  );
}
