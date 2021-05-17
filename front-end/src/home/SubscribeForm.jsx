export default function SubscribeForm() {
  return (
    <form className="subscribe-form">
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
  )
}