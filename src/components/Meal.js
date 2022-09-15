/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react"
import { dummyData } from "./localData"

export default function Meal() {
  const [found, setFound] = useState(0)

  const imageClick = () => {
    var randomValue = Math.floor(Math.random() * (15 - 1 + 1)) + 1

    const found = dummyData.find((element) => element.id === randomValue)

    setFound(found)

    console.log(found)
  }

  return (
    <div
      style={{
        fontSize: "35px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <center>
        <h1>NE YİYORUZ?</h1>
        <div style={{ fontSize: "45px", color: "red" }}>
          {found.text}
          <br></br> <br></br>
        </div>

        <img
          width={300}
          src={require("../components/eat.gif")}
          onClick={imageClick}
        />
        <p style={{ fontSize: "25px" }}> Görsele Tıklayın</p>
      </center>
    </div>
  )
}
