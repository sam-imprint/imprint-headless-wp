import classNames from 'classnames/bind';
import { gql } from '@apollo/client';
import Link from 'next/link';
import styles from './NavigationMenu.module.scss';
import stylesFromWP from './NavigationMenuClassesFromWP.module.scss';
import { flatListToHierarchical } from '@faustwp/core';
import { ServicesMegaMenu } from '../ServicesMegaMenu';
import React, { useState, useEffect, useRef } from 'react';
import { ContactModal } from '../ContactModal';

let cx = classNames.bind(styles);
let cxFromWp = classNames.bind(stylesFromWP);

export default function NavigationMenu({ menuItems, className }) {
  if (!menuItems) {
    return null;
  }

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

  // Based on https://www.wpgraphql.com/docs/menus/#hierarchical-data
  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items) {
    return (
      <ul className={cx('menu')} ref={ref}>
        {items.map((item) => {
          const { id, path, label, children, cssClasses } = item;

          // @TODO - Remove guard clause after ghost menu items are no longer appended to array.
          if (!item.hasOwnProperty('__typename')) {
            return null;
          }

          return (
            <li key={id} className={cxFromWp(cssClasses)}>
              <Link href={path ?? ''}>{label ?? ''}</Link>
              {children.length ? renderMenu(children) : null}
            </li>
          );
        })}
        <ServicesMegaMenu />
        <ContactModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
      </ul>
    );
  }



  return (
    <nav
      className={cx(['component', className])}
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
      {renderMenu(hierarchicalMenuItems)}
    </nav>
  );
}

NavigationMenu.fragments = {
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
