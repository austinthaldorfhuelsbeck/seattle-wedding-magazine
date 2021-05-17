import React, { Fragment } from 'react'
import SubscribeForm from "./SubscribeForm"

export default function Home() {
  const logoImgURL = "https://storage.googleapis.com/seattle-wedding-magazine/seattle-wedding-magazine-white%20logo.png"

  return (
    <Fragment>
      <div className="row pb-5 pb-sm-4">
        <img
          className="flex-img"
          alt="Seattle Wedding Magazine"
          src={logoImgURL}
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
          <SubscribeForm />
        </div>
      </div>
    </Fragment>
  )
}