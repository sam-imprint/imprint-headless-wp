import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  EntryHeader,
  NavigationMenu,
  SEO,
  OurWork,
  CtaButton,
  HornCards,
  Industries,
  HireUs,
  AboutUs,
  ServiceHero,
} from '../components';

export default function SingleService(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];
  const { title, content } = props.data.service;
  const { 
    serviceTitle, 
    heroCopy, 
    heroBtnText, 
    heroBtnUrl, 
    heroimage,
    hornsH2,
    hornsbtnurl,
    hornsbtntext,
    card1title,
    card1,
    card2title,
    card2,
    card3title,
    card3, 
    case1,
    case2,
    case3, 
    bulletsTitleH2, 
    bulletsList, 
    whitepaperimage,
    whitepaperimagealt,
    whitePaperTitleH3,
    whitePaperCopy,
    whitePaperBtnUrl,
    whitePaperBtnText,
  } = props.data.service.servicesOptions;

  return (
    <>
      <SEO
        title={siteTitle}
        description={siteDescription}
      />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <>
          <EntryHeader
            title={title}
          />
          <Container>
            <ServiceHero
              serviceTitle={serviceTitle}
              heroimage={heroimage?.sourceUrl}
              heroAlt={heroimage?.altText}
              heroCopy={heroCopy}
              heroBtnText={heroBtnText}
              heroBtnUrl={heroBtnUrl}
            />
            <OurWork
              case1={case1?.sourceUrl}
              case1Alt={case1?.altText}
              case2={case2?.sourceUrl}
              case2Alt={case2?.altText}
              case3={case3?.sourceUrl}
              case3Alt={case3?.sourceUrl}
            />
            <CtaButton />
            <HireUs
              case3={case3?.sourceUrl}
              bulletsTitleH2={bulletsTitleH2}
              bulletsList={bulletsList}
              whitePaperImage={whitepaperimage?.sourceUrl}
              whitePaperImageAlt={whitepaperimagealt}
              whitePaperTitleH3={whitePaperTitleH3}
              whitePaperCopy={whitePaperCopy}
              whitePaperBtnUrl={whitePaperBtnUrl}
              whitePaperBtnText={whitePaperBtnText}
            />
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
            <AboutUs />
            <Industries />
          </Container>
        </>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

SingleService.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetService(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    service(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      id
        servicesOptions {
          heroimage {
              altText
              sourceUrl
              uri
            }
          case1 {
            altText
            sourceUrl
          }
          case2 {
            altText
            uri
            sourceUrl
          }
          case3 {
            altText
            uri
            sourceUrl
          }
          bulletsList
          bulletsTitleH2
          heroBtnText
          heroBtnUrl
          heroCopy
          hornsH2
          hornsbtntext
          hornsbtnurl
          card1title
          card1
          card2title
          card2
          card3title
          card3 
          serviceTitle
          whitepaperimage {
            sourceUrl
          }
          whitepaperimagealt
          whitePaperBtnText
          whitePaperBtnUrl
          whitePaperCopy
          whoWeAreBtnUrl
          whitePaperTitleH3
          whoWeAreBtnText
          whoWeAreCopy
          whoWeAreH2
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

SingleService.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview,
  };
};
