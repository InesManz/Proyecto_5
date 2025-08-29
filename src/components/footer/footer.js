import "./footer.css";

export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  footer.innerHTML = `
    <div class="footer-top">
      <!-- Columna 1 -->
      <div class="footer-col">
        <p class="brand-desc">
          Clothing and lifestyle brand for people who is dead inside :)
        </p>
        <div class="socials">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-spotify"></i></a>
        </div>
        <select class="country-select">
          <option value="es">Spain (EUR €)</option>
          <option value="us">USA (USD $)</option>
        </select>
      </div>

      <!-- Columna 2 -->
      <div class="footer-col">
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

      <!-- Columna 3 -->
      <div class="footer-col">
        <h4>Join our mailing list</h4>
        <p>
          Subscribe to our newsletter and stay updated with the latest news
          and exclusive offers. You'll also receive a <b>10% discount</b> on
          your first order :)
        </p>
        <form class="newsletter">
          <input type="email" placeholder="Enter email" />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>

    <!-- Parte inferior -->
    <div class="footer-bottom">
      <div class="payment-icons">
        <img src="/src/assets/icons/apple-pay-svgrepo-com.svg" alt="appel pay"/>
        <img src="/src/assets/icons/google-pay-svgrepo-com.svg" alt="google pay" />
        <img src="/src/assets/icons/visa-svgrepo-com.svg" alt="visa" />
        <img src="/src/assets/icons/mastercard-svgrepo-com.svg" alt="MasterCard" />
        <img src="/src/assets/icons/paypal-svgrepo-com.svg" alt="pay pal" />
      </div>
      <p>© 2025 SEPUlCRO. Powered by Shopify</p>
    </div>
  `;

  return footer;
}
