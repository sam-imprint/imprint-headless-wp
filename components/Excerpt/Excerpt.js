import Link from 'next/link';
import { FeaturedImage } from '../FeaturedImage';
import { PostInfo } from '../PostInfo';
import styles from './Excerpt.module.scss';
import className from 'classnames/bind';

let cx = className.bind(styles);

export default function Post({
  title,
  excerpt,
  date,
  author,
  uri,
  featuredImage,
}) {
  return (
    <article className={styles.component}>
      {featuredImage && (
        <Link href={uri}>
          <a>
            <FeaturedImage
              image={featuredImage}
              layout="responsive"
              className={styles.featuredImage}
            />
          </a>
        </Link>
      )}

      <div className={cx('copy')}>
      <Link href={uri} >
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Link href={uri}>
        <a className={cx('read_more')}>
          Read More
        </a>
      </Link>
      </div>
    </article>
  );
}
