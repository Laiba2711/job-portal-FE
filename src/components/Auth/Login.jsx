import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/login`,
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if(isAuthorized){
    return <Navigate to={'/'}/>
  }

  return (
    <>
      <section className="authPage">
      <div className="banner">
         
        </div>
        <div className="container">
          <div className="header">
          <img src="/logo.png" alt="login" />
            <h3>𝐋𝐎𝐆𝐈𝐍 𝐓𝐎 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>ʟᴏɢɪɴ ᴀꜱ</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">ꜱᴇʟᴇᴄᴛ ʀᴏʟᴇ</option>
                  
                  <option value="Job Seeker">ᴊᴏʙ ꜱᴇᴇᴋᴇʀ</option>
                  <option value="Employer">ᴇᴍᴘʟᴏʏᴇʀ</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>ᴇᴍᴀɪʟ ᴀᴅᴅʀᴇꜱꜱ</label>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <div className="buttonContainer">
            <button type="submit" className="loginButton" onClick={handleLogin}>
            ʟᴏɢɪɴ
            </button>
           
              <Link to={"/register"} className="registerLink">ʀᴇɢɪꜱᴛᴇʀ ɴᴏᴡ</Link>
           
          </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;