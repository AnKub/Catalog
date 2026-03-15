import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__left">
      <div className="footer__logos">
        <span className="footer__logo">
          <img src="/src/assets/icons/02.svg" alt="AQVEX Logo" width={28} height={28} />
        </span>
        <span className="footer__logo">
          <img src="/src/assets/icons/01.svg" alt="AQVEX Logo 2" width={28} height={28} />
        </span>
      </div>
      <span className="footer__copyright">AQVEX © 2026 | Все права защищены</span>
    </div>
    <div className="footer__right">
      <span className="footer__pay">
        <img src="/src/assets/icons/masterCart.svg" alt="MasterCard" width={32} height={20} />
      </span>
      <span className="footer__pay">
        <img src="/src/assets/icons/visa.svg" alt="Visa" width={32} height={20} />
      </span>
      <span className="footer__pay">
        <img src="/src/assets/icons/apple.svg" alt="Apple Pay" width={28} height={20} />
      </span>
      <span className="footer__pay">
        <img src="/src/assets/icons/gpay.svg" alt="Google Pay" width={28} height={20} />
      </span>
    </div>
  </footer>
);

export default Footer;
