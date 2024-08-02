import React from 'react';
import './Icloud.css';
import { Link } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import  applescreen  from "../Images/apple-screen-img.svg";
import { BiSolidRightArrowCircle } from "react-icons/bi";

function ICloudSignin() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="#" className="icloud-logo">
                    <FaApple /> icloud
                    </Link>
                </nav>
            </header>

            <main id="main">
                <form id="sign-in">
                <img src={applescreen} alt="applescreen" className="" id="apple-color-logo"/>
                    <p>Sign in with Apple ID</p>
                    <div className="input-container">
                        <Link href="#"><BiSolidRightArrowCircle className='bx-right-arrow-circle'/></Link>
                        <input type="text" placeholder="Email or Phone Number" id="email-phone" />
                    </div>
                    <label>
                        <input type="checkbox" id="check" />Keep me signed in
                    </label>
                    <div className="links">
                        <div className="forgot"><Link to="#">Forgot Password?</Link></div>
                        <Link to="#">Create Apple ID</Link>
                    </div>
                </form>
            </main>

            <footer>
                <div className="footer-div">
                    System status
                    <div className="sep"></div>
                    Privacy Policy
                    <div className="sep"></div>
                    Terms and conditions
                </div>
                <div className="footer-div">
                    © 2024 Apple Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default ICloudSignin;
