import { useContext } from "react";
import GameContext from "../context/GameContext";
import Banner from "./Banner";
import { FaPlaystation, FaXbox, FaWindows, FaLinux, FaApple, FaAndroid, FaAppStore, FaStar} from "react-icons/fa"
import { BsNintendoSwitch } from "react-icons/bs";
import { useNavigate } from "react-router-dom"

const GamesList = () => {
    const {gamesList, genre, setQuery, setGames, handleDetails} = useContext(GameContext)
    const navigate = useNavigate();
    const handelSelectGame = (item) => {
      setQuery('');
      setGames([]); 
      navigate(`/game/${item.id}`);
    }
    return (
        <>
            <h1 className="text-6xl font-extrabold my-10">Popular games</h1>
            <div className="flex flex-wrap gap-5 mt-10">
              {gamesList.map((item, index) => (
                item.genres.some((g) => g.slug === genre) && (
                  <div key={index} className="flex items-end relative hover:scale-110 duration-200 cursor-pointer" onClick={() => {
                    handleDetails(item)
                    handelSelectGame(item)
                  }}>
                    <img
                      src={item.background_image}
                      alt={item.name}
                      className="w-44 h-72 object-cover"
                    />
                    <div className="absolute bottom-0 w-full flex flex-col gap-2 h-[105px] justify-center bg-gray-900 bg-opacity-90 p-2">
                      <h1 className="text-white text-xs font-extrabold">{item.name}</h1>
                      <p className="flex text-xs gap-1"><FaStar className="mt-[2px]"/> {item.rating}</p>
                      <div className="flex gap-4 text-xs flex-wrap">
                        {item.parent_platforms?.map((p, platformIndex) => {
                          const platformName = p.platform.name.toLowerCase();
                          return (
                            <p key={platformIndex}>
                              {platformName === "pc" && <FaWindows />}
                              {platformName === "apple macintosh" && <FaApple />}
                              {platformName === "linux" && <FaLinux />}
                              {platformName === "playstation" && <FaPlaystation />}
                              {platformName === "xbox" && <FaXbox />}
                              {platformName === "nintendo" && <BsNintendoSwitch />}
                              {platformName === "android" && <FaAndroid />}
                              {platformName === "ios" && <FaAppStore />}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
        </>

    );
};

export default GamesList;

