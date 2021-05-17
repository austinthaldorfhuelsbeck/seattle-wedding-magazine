import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav menu-right ml-auto">
            <Link to="/" className="mx-2 nav-link"><h3>Home</h3></Link>
            <Link to="/submissions" className="mx-2 nav-link"><h3>Submissions</h3></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}