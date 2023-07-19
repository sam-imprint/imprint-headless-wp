import React, { useState, useEffect, useRef} from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { gql } from '@apollo/client';
import styles from './MenuModal.module.scss';
import Modal from 'react-modal';
import Image from 'next/image';
import { flatListToHierarchical } from '@faustwp/core';
import { FaArrowRightLong } from 'react-icons/fa6';
import { ContactModal } from '../../components';

Modal.setAppElement('#__next'); // replace with your app element id

let cx = classNames.bind(styles);

export default function MenuModal({ menuItems, isMenuOpen, onRequestClose }) {
  if (!menuItems) {
    return null;
  }

  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items) {
    return (
      <ul className={cx('menu')} >
          <li><Link href="/">Home</Link></li>
        {items.map((item) => {
          const { id, path, label, children, cssClasses } = item;

          if (!item.hasOwnProperty('__typename')) {
            return null;
          }

          return (
            <li key={id} className={cx('menu-item', cssClasses)}>
              <Link href={path ?? ''}>{label ?? ''}</Link>
              {children.length ? renderMenu(children) : null}
            </li>
          );
        })}
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    );
  }

  return (
    <Modal
      isOpen={isMenuOpen}
      onRequestClose={onRequestClose}
      contentLabel="Menu Modal"
      className={cx('menu_modal')}
    >
      <button className={cx('modal_close')} onClick={onRequestClose}>
        Menu<div className={cx('m_close_icon')}><FaArrowRightLong  size='1x' /></div>
      </button>
      <nav className={cx('component')} role="navigation" aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
        {renderMenu(hierarchicalMenuItems)}
      </nav>
      <Link href="/">
          <a className={cx('logo')}>
            <Image 
                src="https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/03/ID-Logo-LG.png"
                alt="Imprint Digital"
                width="342"
                height="62"
                />
          </a>
        </Link>
    <div className={cx(['info_link'])}>
    <Link href="tel:+19705184491">970-518-4491</Link>
    <Link href="http://localhost:3000/">815 14th St SW, Loveland CO 80537</Link>
    </div>
      <button className={cx('m_contact_btn')}>
        <Link href="/contact">Message Us</Link>
        </button>
    </Modal>
    
  );
}

MenuModal.fragments = {
  entry: gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `,
};
