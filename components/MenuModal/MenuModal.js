import React from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { gql } from '@apollo/client';
import styles from './MenuModal.module.scss';
import Modal from 'react-modal';
import Image from 'next/image';
import { flatListToHierarchical } from '@faustwp/core';
import { FaArrowRightLong } from 'react-icons/fa6';

Modal.setAppElement('#__next'); // replace with your app element id

let cx = classNames.bind(styles);

export default function MenuModal({ menuItems, isMenuOpen, onRequestClose }) {
  if (!menuItems) {
    return null;
  }

  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items) {
    return (
      <ul className={cx('menu')}>
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
        <FaArrowRightLong size='1x' />
      </button>
      <nav className={cx('component')} role="navigation" aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
        {renderMenu(hierarchicalMenuItems)}
      </nav>
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
