function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Rent</span>-A-Drive 
              </li>
              
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp;+91 987891234(098) 
                </a>
              </li>
              
              <li>
                <a
                  href="mailto: 
                rentadrive@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; rentadrive@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://jephunneh.com/"
                >
                  Design by Arun&Ashbel
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">New York</a>
              </li>
              <li>
                <a href="#home">China</a>
              </li>
              <li>
                <a href="#home">Malaysia</a>
              </li>
              <li>
                <a href="#home">Korea</a>
              </li>
              <li>
                <a href="#home">Nepal</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            

    
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
