import { gql, useQuery } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  ServiceHero,
  Footer,
  Main,
  Container,
  NavigationMenu,
  SEO,
  Services,
} from '../components';
import { getNextStaticProps } from '@faustwp/core';
import Image from 'next/image';


export default function Page(props) {
  const { data } = useQuery(Page.query, {
    variables: Page.variables(),
  });
  const title = props.title;

  const { title: siteTitle, description: siteDescription } = data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];

  const content = [
    { 
    title: "Fractional CMO", 
    copy:"Customized, data-driven, and holistic marketing strategies that help launch, scale, and empower brands of all sizes for growth.",
    linkText:"Find Out How You Can Benefit",
    linkUrl:"/",
    heroImg:"https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/leadership-binoculars-cut.png",
    heroImgAlt:"What we do for you!",
  }
   ];

   const contentComponents= content.map((content) => {
    return <ServiceHero {...content}/>
   }
 );

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <Container>
            {contentComponents}
            <Services />
        </Container>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Page.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Page.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION
  };
};

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {Page, props: {title: 'File Page Example'}});
}
