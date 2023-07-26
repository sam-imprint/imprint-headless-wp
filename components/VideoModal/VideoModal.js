import classNames from 'classnames/bind';
import styles from './VideoModal.module.scss';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import Image from 'next/image';

Modal.setAppElement('#__next') // replace with your app element id

let cx = classNames.bind(styles);

export default function VideoModal({ isOpen, onRequestClose }) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
      className={cx('video_modal')}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }
      }}
    >
    <div className={cx('video_wrap')}>
      <ReactPlayer url='https://youtu.be/c3YJn-r1snk' playing 
            width="100%"
            height="100%"
      />
      <button onClick={onRequestClose}>  
      <Image 
                src="https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Red-Arrow.svg"
                alt="Close Modal"
                width="342"
                height="62"
                /></button>
      </div>
    </Modal>
  );
}