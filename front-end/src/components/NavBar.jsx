import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="navbar-nav menu-left mr-auto">
          <a
            href="https://www.instagram.com/seattleweddingmagazine"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
        <div className="navbar-nav menu-right ml-auto">
          <Link to="/" className="mx-2 nav-link"><h3>Home</h3></Link>
          <Link to="/submissions" className="mx-2 nav-link"><h3>Submissions</h3></Link>
        </div>
      </div>
    </nav>
  )
}