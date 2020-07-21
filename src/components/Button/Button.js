import React from "react"
import Link from "gatsby-link"
import "./Button.scss"
export default function Button(props) {
  return (
    <div className="button__container">
      <Link className="button" to={props.to}>
        {props.content}
      </Link>
    </div>
  )
}
