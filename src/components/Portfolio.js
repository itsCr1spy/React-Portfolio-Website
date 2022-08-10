import React from "react";

import webDocument from "../assets/portfolio/webDocument.png";
import chatApp from "../assets/portfolio/chatApp.png";
import musicPlayer from "../assets/portfolio/musicPlayer.png";
import game2048 from "../assets/portfolio/2048Game.png";
import weatherApp from "../assets/portfolio/weatherApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: webDocument,
      title: "Web Document App",
      link: "https://github.com/itsCr1spy/Web-Document-App",
    },
    {
      id: 2,
      src: chatApp,
      title: "Chat App",
      link: "https://github.com/itsCr1spy/Firebase-Chat-App",
    },
    {
      id: 3,
      src: musicPlayer,
      title: "Web Music Player",
      link: "https://github.com/itsCr1spy/Online-Music-Player",
    },
    {
      id: 4,
      src: game2048,
      title: "2048 Game",
      link: "https://github.com/itsCr1spy/2048-Game",
    },
    {
      id: 5,
      src: weatherApp,
      title: "Weather App",
      link: "https://github.com/itsCr1spy/Weather-App",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/*
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
								</button>
								*/}
                <button className="w-9/10 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link}>{title}</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
