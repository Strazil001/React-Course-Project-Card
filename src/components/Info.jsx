import React from 'react'
import './Info.css'
import Img from '../assets/27459671_572744973059368_4797818048085102545_n.jpg'

function Info() {
  return (
    <div className="main-container">
      <img className="info--img" alt="Profile picture of myself" src={Img} />
      <div className="info-container">
        <h1 className="info--header">Steve Van de Vyver</h1>
        <h3 className="info--title">.NET Developer</h3>
        <div className="info-buttons">
          <button className="info--btn_email"><span><i class="fa-solid fa-envelope"></i></span> Email</button>
          <button className="info--btn_linkedin"><span><i class="fa-brands fa-linkedin"></i></span> LinkedIn</button>
        </div>
      </div>
   </div>
  )
}

export default Info
