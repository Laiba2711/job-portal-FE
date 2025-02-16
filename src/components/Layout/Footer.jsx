import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";


function Footer() {
  const { isAuthorized } = useContext(Context);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.includes("@") && email.includes(".")) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail(""); // Clear input field
    } else {
      alert("Please enter a valid email address.");
    }
  };
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <img src="/logolk.png" alt="logo" />
          <p>"𝕺𝖕𝖕𝖔𝖗𝖙𝖚𝖓𝖎𝖙𝖎𝖊𝖘 𝖉𝖔𝖓'𝖙 𝖍𝖆𝖕𝖕𝖊𝖓, 𝖞𝖔𝖚 𝖈𝖗𝖊𝖆𝖙𝖊 𝖙𝖍𝖊𝖒. 𝕶𝖊𝖊𝖕 𝖑𝖊𝖆𝖗𝖓𝖎𝖓𝖌, 𝖐𝖊𝖊𝖕 𝖌𝖗𝖔𝖜𝖎𝖓𝖌, 𝖆𝖓𝖉 𝖙𝖍𝖊 𝖗𝖎𝖌𝖍𝖙 𝖏𝖔𝖇 𝖜𝖎𝖑𝖑 𝖋𝖎𝖓𝖉 𝖞𝖔𝖚." </p>
        </div>

                {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill />
          </a>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-subscribe">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            
            /></div>
            <button className="footer-button" onClick={handleSubscribe}>Subscribe</button>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 𝟸𝟶𝟸𝟻 𝙻𝚊𝚒𝚋𝚔𝚊𝚗. 𝙰𝚕𝚕 𝚁𝚒𝚐𝚑𝚝𝚜 𝚁𝚎𝚜𝚎𝚛𝚟𝚎𝚍.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;