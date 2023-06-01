import { gql, useQuery } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  QuoteHero,
  Footer,
  Main,
  Container,
  NavigationMenu,
  SEO,
  CaseStudy,
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
    title: "Holla At Us", 
    subtitle: "Comprehensive Digital Marketing Solutions", 
    copy:"Helping organizations establish their beachhead. Your digital marketing partner that ensures your brand thrives.", 
    quote:"What a wonderful team at IMPRINT! They are responsive, kind and good to their people. They hit deadlines and are always supportive of projects put in front of them. A great partner indeed!",
    source:"~ Christine Forster (My Big Day)",
  }
   ];

   const contentComponents= content.map((content) => {
    return <QuoteHero {...content}/>
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
            <CaseStudy />
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
