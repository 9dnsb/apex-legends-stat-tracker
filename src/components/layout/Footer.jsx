import { GiFootprint } from 'react-icons/gi'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-neutral  footer-center">
      <div>
        <GiFootprint size="50px" />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
