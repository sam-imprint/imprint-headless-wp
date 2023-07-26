
import classNames from 'classnames/bind';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServicesMegaMenu.module.scss';


let cx = classNames.bind(styles);

const GET_SERVICE_ARCHIVE = gql`
query GetServiceArchive {
  services {
    nodes {
      title
      uri
    }
  }
}
`;

export default function ServicesMegaMenu() {

  const { loading, error, data } = useQuery(GET_SERVICE_ARCHIVE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className={cx(['megmenu_serv'])}>
      <div className={cx(['inner_menu'])}>
        <h3>Imprint Digital Services</h3>
        <ul className={cx(['services_menu'])}>
        {data.services.nodes.map(({ title, uri }) => (
            <li><Link href={uri}>{title}</Link></li>
            ))}
        </ul>
      </div>
      <div className={cx(['cases'])}>
        <div className={cx(['inner_study'])}>
          <Image
            src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/06/YARDHOUSE-Menu-Thumb.jpg'
            alt='YardHouse Case Study'
            width='221px'
            height='110px'
            />
            <h3>How we Helped Yardhouse
Creations Maximize ROI with Social Media Management and Paid Ads</h3>
<Link href="/">View Case Study</Link>
        </div>
        <div className={cx(['inner_study'])}>
        <Image
            src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/06/YARDHOUSE-Menu-Thumb.jpg'
            alt='YardHouse Case Study'
            width='221px'
            height='110px'
            />
                        <h3>How we Helped Yardhouse
Creations Maximize ROI with Social Media Management and Paid Ads</h3>
<Link href="/">View Case Study</Link>
        </div>
      </div>
      <div className={cx(['meg_cta'])}>
        <p>Know more about what a Fractional CMO can do for your buisiness</p>
        <form>
          <input type="text" placeholder="Send Us Your Email"></input>
        </form>
      </div>
    </div>
  );
}