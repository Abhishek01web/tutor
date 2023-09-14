import React from 'react';

function Footer() {
  return (
    <>
      <footer className="footer-container">
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} tutor.com. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
