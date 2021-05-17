import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <div id="main-wrapper">
      <header id="header">
        <NavBar />
      </header>
      <section className="fullscreen d-flex flex-column">
        <div className="container py-5 px-4 px-lg-5 my-auto">
          <div className="row py-5 py-sm-4">
            <img
              className="flex-img"
              alt="Seattle Wedding Magazine"
              src="https://storage.googleapis.com/seattle-wedding-magazine/seattle-wedding-magazine-white%20logo.png" 
            />
          </div>
          <div className="row py-5 py-sm-4">
            <div className="col-12 text-center mx-auto">
              <h1 className="text-9 text-white bg-secondary d-inline-block font-weight-700 rounded px-3 py-2 mb-4">
                <strong>Coming Soon!</strong>
              </h1>
              <h2 className="mb-4">Our new website is on its way.</h2>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-5 mx-auto text-center">
              <p className="mb-3">Get notified when we launch.</p>
              <div className="subscribe-form">
                <form>
                  <div className="input-group">
                    <input
                      type="email"
                      id="subscribe-form-email"
                      name="subscribe-form-email"
                      className="form-control border-2 required"
                      required
                      placeholder="Enter Your Email Here..."
                    />
                    <div className="input-group-append">
                      <button
                        id="subscribe-form-submit"
                        name="subscribe-form-email"
                        className="btn btn-secondary px-4 shadow-none"
                        type="submit"
                      >
                        <span className="d-none d-sm-block">Notify Me</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer className="container text-center">
          <p class="text-muted text-2 mb-2">
            Copyright &copy; 2021 Seattle Wedding Magazine. All Rights Reserved.
          </p>
        </footer>
      </section>
    </div>
  )
}