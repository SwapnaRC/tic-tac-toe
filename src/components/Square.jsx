import React, { Fragment } from "react"
import  "./styles.css"

const Square = ({ value, onClick }) => {
  return (
    <Fragment>
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </Fragment>
  )
}

export default Square
