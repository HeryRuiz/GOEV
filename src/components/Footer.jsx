import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__content">
        <img
          className="footer__logo"
          src="https://listcarbrands.com/wp-content/uploads/2017/10/Logo-Polestar.png"
          alt="GOEV logo"
        />
        <div className="footer__text">
          <p>Privacy</p>
          <p>Terms of Use</p>
          <p>Electric</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
