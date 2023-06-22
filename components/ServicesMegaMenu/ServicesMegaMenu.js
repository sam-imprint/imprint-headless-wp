
import classNames from 'classnames/bind';
import { gql } from '@apollo/client';
import Link from 'next/link';
import styles from './ServicesMegaMenu.module.scss';

let cx = classNames.bind(styles);

export default function ServicesMegaMenu({ className }) {

  return (
    <div className={cx(['megmenu_serv'])}>
      <div className={cx(['inner_menu'])}>
        <ul>
            <li>LINK TEXT</li>
            <li>LINK TEXT</li>
            <li>LINK TEXT</li>
        </ul>
      </div>
      <div className={cx(['cases'])}>
        <div className={cx(['inner_study'])}>
        </div>
        <div className={cx(['inner_study'])}>
        </div>
        <div className={cx(['inner_study'])}>
        </div>
      </div>
      <div className={cx(['meg_cta'])}>
        <p>LOREM IPSUM DELOR SET</p>
      </div>
    </div>
  );
}