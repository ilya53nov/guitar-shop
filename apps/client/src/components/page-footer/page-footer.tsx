import { ClientRoute } from '@project/shared-types';
import FooterAbout from './footer-about';
import FooterContact from './footer-contact';
import FooterLinks from './footer-links/footer-links';
import SocialList from './social-list/social-list';

export default function PageFooter():JSX.Element {
  return(
    <footer className="footer">
        <div className="container">
          <div className="footer__container">
            <div className="footer__logo-wrapper"><a className="footer__logo logo" href={ClientRoute.Main}><img className="logo__img" width="70" height="70" src="src/assets/img/svg/logo.svg" alt="Логотип" /></a>
              <SocialList />
            </div>
            <FooterAbout />
            <FooterLinks />
            <FooterContact />
          </div>
        </div>
      </footer>
  );
}