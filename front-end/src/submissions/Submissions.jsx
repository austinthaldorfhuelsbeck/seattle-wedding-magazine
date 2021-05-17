import React, { Fragment } from "react"
// import SubmissionsForm from "./SubmissionsForm"

export default function Submissions() {
  return (
    <Fragment>
      <div className="overlay-card py-2 mb-5 text-center mx-auto">
        <h1 className="my-3">Submissions</h1>
        <p>
          <em>Deadline for our Summer Issue is 5/31/21.</em>
        </p>
        <p>
          To submit, send an email to <a href="mailto:seattleweddingmagazine@gmail.com">
            seattleweddingmagazine@gmail.com</a>
          , with the subject line 'submissions'.
        </p>
        <h3 className="my-4">
          Acceptable submissions include:
        </h3>
        <ul>
          <li>
            Real weddings
          </li>
          <li>
            Styled Shoots
          </li>
          <li>
            Editorials of your wedding clothing designs
          </li>
          <li>
            Editorials of your floral or MUA work
          </li>
          <li>
            Real-world wedding short story or poetry submissions
          </li>
        </ul>
      </div>
    </Fragment>
  )
}