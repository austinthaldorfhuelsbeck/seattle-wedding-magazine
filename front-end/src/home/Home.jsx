import React, { Fragment } from 'react'
import SubscribeForm from "./SubscribeForm"

export default function Home() {
  const logoImgURL = "https://storage.googleapis.com/seattle-wedding-magazine/seattle-wedding-magazine-white%20logo%20short.png"

  return (
    <Fragment>
      <div className="row pb-3 pb-sm-1">
        <img
          className="flex-img"
          alt="Seattle Wedding Magazine"
          src={logoImgURL}
        />
      </div>
      <div className="row py-4 py-sm-2">
        <div className="text-center mx-auto">
          <h1 className="text-white bg-secondary d-inline-block rounded px-3">
            <strong>Coming Soon!</strong>
          </h1>
          <h2 className="my-4">Our new website is on its way.</h2>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto text-center">
          <p className="mb-3">Get notified when we launch.</p>
          <SubscribeForm />
        </div>
      </div>
    </Fragment>
  )
}
