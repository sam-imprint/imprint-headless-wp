import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  Hero,
  SEO,
  CtaButton,
  HornCards,
  TrustSection,
  Industries,
  Services,
  CaseStudies,
} from '../components';

export default function Component(props) {
  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];
  const { 
    hornsH2, 
    hornsbtntext, 
    hornsbtnurl,
    card1title,
    card2title,
    card3title, 
    card1, 
    card2, 
    card3 } = props?.data?.page.homeOptions ?? [];

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
          <Hero title={siteTitle} />
          <CtaButton/>
          <HornCards
            hornsH2={hornsH2}
            card1Title={card1title}
            card1={card1}
            card2Title={card2title}
            card2={card2}
            card3Title={card3title}
            card3={card3}
            hornsBtnText={hornsbtntext}
            hornsBtnUrl={hornsbtnurl}
          />
          <TrustSection/>
          <Industries/>
          <Services />
          <CaseStudies/>
        </Container>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    page(id: 51, idType: DATABASE_ID)  {
      homeOptions {
        heroH1
        hornsH2
        hornsbtntext
        hornsbtnurl
        card1title
        card1
        card2title
        card2
        card3title
        card3 
        trustH2
        trustCode
        weServeH2
        servicesH2
        studiesH2
        studiesCopy
        studiesBtnUrl
        studiesBtnText
      }
    }
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

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
