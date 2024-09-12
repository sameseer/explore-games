import { useContext, useState } from "react";
import GameContext from "../context/GameContext";
import { FaPlaystation, FaXbox, FaWindows, FaLinux, FaApple, FaAndroid, FaAppStore, FaStar} from "react-icons/fa"
import { BsNintendoSwitch } from "react-icons/bs";

const GamesDetail = () => {
    const { detail } = useContext(GameContext);
    console.log(detail)
    return (
      <div className="relative bg-cover bg-center w-full h-screen flex" 
           style={{ backgroundImage: `url(${detail.background_image})` }}>
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="relative m-10 flex gap-10 items-center z-10 flex-col md:flex-row">
          <img
            src={detail.background_image}
            alt=""
            className="w-[450px] h-[400px] object-cover object-center rounded-2xl"
          />
          <div className="flex flex-col gap-5 flex-col">
            <h1 className="text-5xl font-extrabold text-white">{detail.name}</h1>
            <h2 className="text-xl font-bold text-gray-100">
              Released: {detail.released}
            </h2>
            <p className="text-sm text-zinc-400">{detail.description_raw}</p>
            {detail.platforms && detail.platforms.length > 0 ? (
              <ul className="flex gap-1 text-sm font-bold flex-wrap">
                <h1 className="underline">Platforms: </h1>
                {detail.platforms.map((platform) => (
                  <li key={platform.platform.id}>
                    {platform.platform.name},
                  </li>
                ))}
              </ul>
        ) : (
          <p>No platforms available</p>
        )}
            {detail.genres && detail.genres.length > 0 ? (
              <ul className="flex gap-1 text-sm font-bold flex-wrap">
                <h1 className="underline">Genres: </h1>
                {detail.genres.map((gen) => (
                  <li key={gen.id}>
                    {gen.name},
                  </li>
                ))}
              </ul>
        ) : (
          <p>No platforms available</p>
        )}
          </div>
        </div>
      </div>
    );

};

export default GamesDetail