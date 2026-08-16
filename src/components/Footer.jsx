import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo-image/logo.png" alt="ET-CAM logo" className="footer__logo" />
          <span>ET-CAM</span>
        </div>
        <p>Ethiopian Creative Advertisement Media — Addis Ababa, Ethiopia.</p>
        <p>© {new Date().getFullYear()} ET-CAM. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
