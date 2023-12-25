import React from 'react'
import "./doctors.scss"
import jeff from "@/img/jeff.png"
import Letby from "@/img/Letby.jpg"
import Lector from "@/img/lector.jpg"
import Ted from "@/img/ted.jpg"

function Doctors() {
  return (
   
    <div className="container1">

      <div className="box-container">

        <div className="box">
          <img src={Lector}  alt='problem happened'/>
          <h3>Dr Thomas Russell</h3>
          <p>Pediatrition &amp; GP</p>
          <a href='#' class="btn">Bio</a>
        </div>

        <div className="box">
          <img src={jeff}  alt='problem happened'/>
          <h3>Dr Jeff Darma</h3>
          <p>Neurologist &amp; Surgeon </p>
          <a href='#' class="btn">Bio</a>
        </div>

        <div className="box">
          <img src={Letby}  alt='problem happened'/>
          <h3>Lucy letby</h3>
          <p>Registered Nurse &amp; Midwife</p>
          <a href='#' class="btn">Bio</a>
        </div>

        <div className="box">
          <img src={Ted}  alt='problem happened'/>
          <h3>Dr Ted Bundy</h3>
          <p>Neurologist &amp; Surgeon</p>
          <a href='#' class="btn">Bio</a>
        </div>

        <div className="box">
          <img src={jeff}  alt='problem happened'/>
          <h3>Dr Thomas Russell</h3>
          <p>Pediatrition &amp; Cardiologist</p>
          <a href='#' class="btn">Bio</a>
        </div>

        <div className="box">
          <img src={jeff}  alt='problem happened'/>
          <h3>Dr Thomas Russell</h3>
          <p>Pediatrition &amp; Cardiologist</p>
          <a href='#' class="btn">Bio</a>
        </div>

      

      </div>
    </div>



  )
}

export default Doctors