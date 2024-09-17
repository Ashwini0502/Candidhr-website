import React from 'react';
import '../styles/footer.css'; // Import your custom CSS
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="footer-row">
          {/* Company Section */}
          <div className="footer-col">
            <h4 className="footer-heading">company</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">about us</a></li>
              <li><a href="#" className="footer-link">our services</a></li>
              <li><a href="#" className="footer-link">privacy policy</a></li>
              <li><a href="#" className="footer-link">affiliate program</a></li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div className="footer-col">
            <h4 className="footer-heading">get help</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">shipping</a></li>
              <li><a href="#" className="footer-link">returns</a></li>
              <li><a href="#" className="footer-link">order status</a></li>
              <li><a href="#" className="footer-link">payment options</a></li>
            </ul>
          </div>

          {/* Online Shop Section */}
          <div className="footer-col">
            <h4 className="footer-heading">Address</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">512, Pyramid Axis,</a></li>
              <li><a href="#" className="footer-link">Baner, Pune,</a></li>
              <li><a href="#" className="footer-link">Maharashtra, India
              411045</a></li>
              <li><a href="#" className="footer-link">info@diacto.com</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="footer-col">
            <h4 className="footer-heading">follow us</h4>
            <div className="social-links">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
