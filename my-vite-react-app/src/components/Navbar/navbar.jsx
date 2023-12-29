
import logo from "@/img/logo.jpg"
import { Link } from "react-router-dom";
import "@/style.scss"


const Navbar = () => {
    
  return(
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt=""/>
          </Link>
        </div>

              <div className="links">
                <Link className="link" to="/Doctors">
                  <h6>Doctors</h6>
                </Link>
                <Link className="link" to="/Fees">
                  <h6>Fees</h6>
                </Link>
                <Link className="link" to="/PatientForm">
                  <h6>Patient form</h6>
                </Link>
                <Link className="link" to="/Testimonial">
                  <h6>Testimonials</h6>
                </Link>
                <Link className="link" to="/BookAppointment">
                  <h6>Book Appointment</h6>
                </Link>
                

              </div>
              
      </div>
    </div>
  )

}

export default Navbar