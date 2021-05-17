import React, { useState } from "react"
import UploadFiles from "./UploadFiles"

export default function SubmissionsForm() {
  // FORM STATE
  const initialFormState = {
    name: "",
    businessName: "",
  }
  const [formData, setFormData] = useState({ ...initialFormState })

  // HANDLERS
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="col col-12 col-md-6 m-auto">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="clientName"><strong>Your name</strong></label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Your name here"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="partnerName"><strong>Your business' name</strong></label>
          <input
            type="text"
            className="form-control"
            name="businessName"
            placeholder="Your business's name here"
            onChange={handleChange}
            value={formData.businessName}
            required
          />
        </div>
        <UploadFiles />
        <button type="submit" className="my-3 btn btn-outline-light btn-lg">Submit</button>
      </form>
    </div>
  )
}