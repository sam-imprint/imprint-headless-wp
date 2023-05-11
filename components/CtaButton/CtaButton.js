import React from 'react';
import Link from 'next/link';
import styles from './CtaButton.module.scss';

export default function CtaButton({
  }) {
    return (
      <button className={styles.component}>
        <Link href="/">Get your free consultation</Link>
      </button>
    );
  }
  