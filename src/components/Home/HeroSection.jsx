import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>𝕱𝖎𝖓𝖉 𝖆 𝖏𝖔𝖇 𝖙𝖍𝖆𝖙 𝖘𝖚𝖎𝖙𝖘</h1>
            <h1>𝔶𝔬𝔲𝔯 𝔦𝔫𝔱𝔢𝔯𝔢𝔰𝔱𝔰 𝔞𝔫𝔡 𝔰𝔨𝔦𝔩𝔩𝔰</h1>
            <p>
            🇩🇮🇸🇨🇴🇻🇪🇷 🇯🇴🇧 🇴🇵🇵🇴🇷🇹🇺🇳🇮🇹🇮🇪🇸 🇹🇭🇦🇹 🇲🇦🇹🇨🇭 🇾🇴🇺🇷 🇸🇰🇮🇱🇱🇸 🇦🇳🇩 🇵🇦🇸🇸🇮🇴🇳🇸. 🇨🇴🇳🇳🇪🇨🇹 🇼🇮🇹🇭 🇪🇲🇵🇱🇴🇾🇪🇷🇸 🇸🇪🇪🇰🇮🇳🇬 🇹🇦🇱🇪🇳🇹 🇱🇮🇰🇪 🇾🇴🇺🇷🇸 🇫🇴🇷 🇷🇪🇼🇦🇷🇩🇮🇳🇬 🇨🇦🇷🇪🇪🇷🇸.
            </p>
          </div>
          <div className="image">
            <img src="/Heros.png" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;