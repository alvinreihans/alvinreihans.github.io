import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className='social-links'>
        <a href='https://github.com/alvinreihans' target='_blank'>
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href='https://linkedin.com/in/alvinreihans/' target='_blank'>
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href='mailto:reihansyah6@gmail.com' target='_blank'>
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </div>
      <div className='copyright'>© 2024 Alvinreihans. All rights reserved.</div>
    </div>
  );
}

export default Footer;