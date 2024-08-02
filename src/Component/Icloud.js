import React from 'react';
import './Icloud.css';
import { Link } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import Memojis from "../Vid/Memojis Animation video.mp4";
import Icloudbox1 from "../Images/Icloud-box-1.png";
import Icloudbox2 from "../Images/ICloud-box-2.png";

function ICloud() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="#" className="icloud-logo">
                    <FaApple /> ICloud
                    </Link>
                </nav>
            </header>

            <main>
                <div className="memoji-vid center-1">
                    <video autoPlay loop muted src={Memojis}></video>
                </div>
                
                <div className="heading center-1">
                    <h1>ICloud</h1>
                </div>

                <div className="sign-in center-1">
                    <button className="sign-in-btn">
                        <Link to="/Icloudsignin">Sign In</Link>
                    </button>
                </div>

                <div className="intro center-1">
                    <p className="intro-text">
                        The best place for all your photos, files, notes, mail, and more.
                    </p>
                </div>

                <div className="box">
                    <div className="box-1">
                        <img src={Icloudbox1} alt="box1" className="box-1-img" />
                        <h2 id="box-1-heading">Easily access apps and data from your iPhone on the web</h2>
                        <p className="box-1-txt">
                            iCloud is essential for keeping personal information from your devices safe, up to date, and available wherever you are. At iCloud.com, you can access your photos, files, and more from any web browser. Changes you make will sync to your iPhone and other devices, so you’re always up to date.
                        </p>
                    </div>

                    <div className="box-2">
                        <img src={Icloudbox2} alt="box2" className="box-2-img" />
                        <h2>
                            More storage plus additional features to protect your privacy
                        </h2>
                        <p>
                            Upgrade to iCloud+ to get more storage and additional features like iCloud Private Relay, Hide My Email, and HomeKit Secure Video. You can even share your subscription with your family. Learn more at <Link to="#">apple.com/icloud.</Link>
                        </p>
                    </div>
                </div>
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

export default ICloud;
