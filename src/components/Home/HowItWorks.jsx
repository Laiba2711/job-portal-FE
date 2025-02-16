import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>𝐇𝐎𝐖 𝐋𝐀𝐈𝐁𝐊𝐀𝐍 𝐖𝐎𝐑𝐊𝐒!</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>𝐂𝐫𝐞𝐚𝐭𝐞 𝐀𝐜𝐜𝐨𝐮𝐧𝐭</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>𝐅𝐢𝐧𝐝 𝐚 𝐉𝐨𝐛/𝐏𝐨𝐬𝐭 𝐚 𝐉𝐨𝐛</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>𝐀𝐩𝐩𝐥𝐲 𝐅𝐨𝐫 𝐉𝐨𝐛/𝐑𝐞𝐜𝐫𝐮𝐢𝐭 𝐒𝐮𝐢𝐭𝐚𝐛𝐥𝐞 𝐂𝐚𝐧𝐝𝐢𝐝𝐚𝐭𝐞𝐬</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;