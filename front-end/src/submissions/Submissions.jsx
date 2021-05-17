import React, { Fragment } from "react"
import SubmissionsForm from "./SubmissionsForm"

export default function Submissions() {
  return (
    <Fragment>
      <div className="submissions text-center mx-auto">
        <h1 className="mt-5">Submissions</h1>
        <p>
          <em>Deadline for our Summer Issue is 5/31/21.</em>
        </p>
        <h4 className="my-5">
          Acceptable submissions include:
        </h4>
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
      <SubmissionsForm />
    </Fragment>
  )
}