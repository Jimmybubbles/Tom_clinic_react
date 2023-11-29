import "./navbar.scss";

const Navbar = () => {
    
  return(
    
    <nav>
        <input type="checkbox" id="check"/>
          <label for="check" class="checkbtn">
              <i class="fa fa-bars"></i>
        </label>
        
        <label class="logo">Tom's Clinic</label>
          
          
          <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Bookings</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
    </nav>
    )
}

export default Navbar