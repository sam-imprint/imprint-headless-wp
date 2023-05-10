import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './NavButton.module.scss';

let cx = classNames.bind(styles);

export default function NavButton() {
    return (
<button className={cx('navbutton')}>
<Link href="#">
Contact
</Link>
</button>
    );
  }



