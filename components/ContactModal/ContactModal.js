import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './ContactModal.module.scss';
import Modal from 'react-modal';

Modal.setAppElement('#__next') // replace with your app element id

let cx = classNames.bind(styles);

  export default function ContactModal({ isOpen, onRequestClose }) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Contact Modal"
  >
    <h2>Contact Us</h2>
    <p>Phone: 970-518-4491</p>
    <p>Address: 815 14th St SW, Loveland CO 80537</p>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Business Name:
        <input type="text" name="businessName" />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <button onClick={onRequestClose}>Close</button>
  </Modal>
  );
}
