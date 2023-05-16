import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cx('component')}>
      <Container>
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
        <NavigationMenu menuItems={menuItems} />
        <p className={cx('copyright')}>{`© ${year} ${title}. All Rights Reserved`}</p>
      </Container>
    </footer>
  );
}
