import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="navbar-nav menu-right ml-auto">
          <Link to="/" className="mx-2 nav-link"><h3><strong>Home</strong></h3></Link>
          <Link to="/submissions" className="mx-2 nav-link"><h3><strong>Submissions</strong></h3></Link>
        </div>
      </div>
    </nav>
  )
}