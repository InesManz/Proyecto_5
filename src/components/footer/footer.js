import "./footer.css";
import applePay from '../assets/icons/apple-pay-svgrepo-com.svg';
import googlePay from '../assets/icons/google-pay-svgrepo-com.svg';
import visa from '../assets/icons/visa-svgrepo-com.svg';
import mastercard from '../assets/icons/mastercard-svgrepo-com.svg';
import paypal from '../assets/icons/paypal-svgrepo-com.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <p className="brand-desc">
            Clothing and lifestyle brand for people who is dead inside :)
          </p>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-spotify"></i></a>
          </div>
          <select className="country-select">
            <option value="es">Spain (EUR €)</option>
            <option value="us">USA (USD $)</option>
          </select>
        </div>

        <div className="footer-col">
          <h4>Quick links</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Legal Notice</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Join our mailing list</h4>
          <p>
            Subscribe to our newsletter and stay updated with the latest news
            and exclusive offers. You'll also receive a <b>10% discount</b> on
            your first order :)
          </p>
          <form className="newsletter">
            <input type="email" placeholder="Enter email" />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="payment-icons">
          <img src={applePay} alt="apple pay" />
          <img src={googlePay} alt="google pay" />
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="MasterCard" />
          <img src={paypal} alt="pay pal" />
        </div>
        <p>© 2025 SEPUlCRO. Powered by Shopify</p>
      </div>
    </footer>
  );
}

export default Footer;
