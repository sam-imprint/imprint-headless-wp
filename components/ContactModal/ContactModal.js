import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './ContactModal.module.scss';
import Modal from 'react-modal';
import Image from 'next/image';

Modal.setAppElement('#__next') // replace with your app element id

let cx = classNames.bind(styles);

  export default function ContactModal({ isOpen, onRequestClose }) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Contact Modal"
    className={cx('contact_modal')}
  >
    <button className={cx('modal_close')} onClick={onRequestClose}>
    <Image 
                src="https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Black-Form-Arrow.svg"
                alt="Close Modal"
                width="342"
                height="62"
                />
    </button>
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
    <form action="/send-data-here" method="post">
            <div className={cx(['field_row'])}><label for="name">Name</label><input type="text" id="name" name="name" /></div>
            <div className={cx(['field_row'])}><label for="email">Email</label><input type="text" id="email" name="email" /></div>
            <div className={cx(['field_row'])}><label for="business">Business Name</label><input type="text" id="business" name="business" /></div>
            <div className={cx(['field_row'])}><label for="phone">Phone</label><input type="text" id="phone" name="phone" /></div>
            <button type="submit">Get Your Free Consultation</button>
        </form>
  </Modal>
  );
}
