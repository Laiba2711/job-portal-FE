import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/logout`,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container nav">
        <div className="logo">
          <img src="/logolk.png" alt="logo" />
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
            𝐇𝐎𝐌𝐄
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
            𝐀𝐋𝐋 𝐉𝐎𝐁𝐒
            </Link>
          </li>
          <li>
          <Link to="/application">𝐀𝐏𝐏𝐋𝐘 𝐅𝐎𝐑 𝐀 𝐉𝐎𝐁</Link>

          </li>
          <li>
          <Link to="/my-applications">𝐌𝐘 𝐀𝐏𝐏𝐋𝐈𝐂𝐀𝐓𝐈𝐎𝐍𝐒</Link>
          </li>
          
          {user && user.role === "Employer" ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                𝐏𝐎𝐒𝐓 𝐍𝐄𝐖 𝐉𝐎𝐁
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                𝐕𝐈𝐄𝐖 𝐘𝐎𝐔𝐑 𝐉𝐎𝐁𝐒
                </Link>
              </li>
            </>
          ) : null}

          <button onClick={handleLogout}>𝐋𝐎𝐆𝐎𝐔𝐓</button>
        </ul>
        <div className="hamburger" onClick={() => setShow(!show)}>
          {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;