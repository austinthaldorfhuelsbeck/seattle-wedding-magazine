import React, { Fragment, useState } from "react"
import emailjs from "emailjs-com"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { init } from "emailjs-com"
init("user_CvpPf1sJ7rZo6giCrFhIr")

export default function SubscribeForm() {
  // FORM STATE
  const initialFormState = { email: "", }
  const [formData, setFormData] = useState({ ...initialFormState })
  const [isThankYou, setIsThankYou] = useState(false)

  // HANDLERS
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      setFormData(initialFormState)
      setIsThankYou(true)
    } catch (err) {
      console.error(err)
    }
  }

  const ThankYou = () => {
    return isThankYou && <h5>Thank you for subscribing!</h5>
  }

  return (
    <Fragment>
      <form className="subscribe-form mb-4" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            className="form-control border-2 required"
            placeholder="Enter Your Email Here..."
            onChange={handleChange}
            value={formData.email}
            required
          />
          <div className="input-group-append">
            <button
              id="submit"
              name="email"
              className="btn btn-secondary px-4 shadow-none"
              type="submit"
            >
              <span className="d-none d-sm-block">Notify Me</span>
              <span className="d-block d-sm-none">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
        </div>
      </form>
      <ThankYou />
    </Fragment>
  )
}