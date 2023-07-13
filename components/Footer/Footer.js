import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

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
        <ul className={cx('social_icons')}>
          <li><FaInstagram size="2rem"/></li>
          <li><FaFacebookF size="2rem"/></li>
          <li><FaYoutube size="2rem"/></li>
          <li><FaTwitter size="2rem"/></li>
          <li><FaLinkedinIn size="2rem"/></li>
        </ul>
        <p className={cx('copyright')}>{`© ${year} ${title}. All Rights Reserved`}</p>
      </Container>
    </footer>
  );
}
