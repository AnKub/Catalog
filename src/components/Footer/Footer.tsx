import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__left">
      <div className="footer__logos">
        <span className="footer__logo">[лого1]</span>
        <span className="footer__logo">[лого2]</span>
      </div>
      <span className="footer__copyright">AQVEX © 2026 | Все права защищены</span>
    </div>
    <div className="footer__right">
      <span className="footer__pay">MasterCard</span>
      <span className="footer__pay">VerifiedVisa</span>
      <span className="footer__pay">ApplePay</span>
      <span className="footer__pay">GooglePay</span>
    </div>
  </footer>
);

export default Footer;
