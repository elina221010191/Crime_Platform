//import React from 'react';
// import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaGooglePay, FaApplePay, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            {/* Newsletter Section */}
            <div className="footer-newsletter">
                <h3>Crime Reporting</h3>
                <p>qwertyuioyuiyuiwerrtyiuopddfghjkqwertyuiosdfghjklqwertyuiwertyui Welcome to our platform and get all updates </p>
                <form>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Submit</button>
                </form>
               
            </div>

            {/* Footer Layout: Left (Links) and Right (Contact and Icons) */}
            <div className="footer-container">
                {/* Left Section: SHOP, COMPANY, ABOUT */}
                <div className="footer-left">
                    <div className="footer-column">
                        <h3>Platform</h3>
                        <ul>
                            <li>Crime Categories</li>
                            <li>Crime Analysis</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>COMPANY</h3>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Help</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>ABOUT</h3>
                        <ul>
                            <li>Who We Are</li>
                            <li>Reviews</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                {/* Right Section: Happy to Help and Icons */}
                <div className="footer-right">
                    {/* <h3>Happy to help</h3>
                    <p>1279 Thorn Street, NY</p>
                    <p>Phone: 307-549-2480</p> */}
                    <p>
                        {/* Mail: <a href="mailto:demo@gmail.com">demo@gmail.com</a> */}
                    </p> <br></br> <br></br> 
                    {/* <div className="footer-social-icons">
                        <FaFacebook size={24} />
                        <FaInstagram size={24} />
                        <FaLinkedin size={24} />
                    </div> <br></br> <br></br>  */}
                    {/* <h3>ACCEPT FOR</h3> */}
                    {/* <div className="footer-payment-icons">
                        <FaCcPaypal size={36} />
                        <FaCcMastercard size={36} />
                        <FaGooglePay size={36} />
                        <FaApplePay size={36} />
                        <FaCcVisa size={36} />
                    </div> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;