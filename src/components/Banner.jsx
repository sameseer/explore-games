import { useContext, useState, useEffect } from "react";
import GameContext from "../context/GameContext";
import { FaPlaystation, FaXbox, FaWindows, FaLinux, FaApple, FaAndroid, FaAppStore} from "react-icons/fa"
import { BsNintendoSwitch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Banner = () => {
    const { gamesList, setQuery, setGames, handleDetails } = useContext(GameContext)
    const [currentIndex, setCurrentIndex] = useState(0);
      const slideDuration = 4000;

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === gamesList.length - 1 ? 0 : prevIndex + 1
          );
        }, slideDuration);

        return () => clearInterval(interval); 
      }, [currentIndex]);
        const navigate = useNavigate();
        const handelSelectGame = (item) => {
          setQuery(''); 
          setGames([]); 
          navigate(`/game/${item.id}`);
        }
      return (
        <div className="relative overflow-hidden ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {gamesList.map((item, index) => (
              <div className="w-full flex-shrink-0 cursor-pointer" key={index} onClick={() => {
                handleDetails(item)
                handelSelectGame(item)
              }}>
                <div className="relative">
                  <img
                    src={item.background_image}
                    alt={item.name}
                    className="w-full h-[500px] rounded-2xl opacity-30 object-cover"
                  />
                  <div className="absolute inset-0 flex justify-end flex-col p-20 gap-5">
                    <h1 className="text-white text-4xl font-extrabold">{item.name}</h1>
                    <div className="flex gap-4 text-2xl">
                    {item.parent_platforms.map((p) => {
                        if(p.platform.name.toLowerCase() == "pc") {
                            return <p><FaWindows/></p>
                        }
                        else if(p.platform.name.toLowerCase() == "apple macintosh" ){
                            return <p><FaApple/></p>
                        }
                        else if(p.platform.name.toLowerCase() == "linux"){
                            return <p><FaLinux/></p>
                        }
                        else if(p.platform.name.toLowerCase() == "playstation"){
                            return <p><FaPlaystation/></p>
                        }
                        else if(p.platform.name.toLowerCase() == "xbox"){
                            return <p><FaXbox/></p>
                        }
                        else if(p.platform.name.toLowerCase() == "nintendo"){
                            return <p><BsNintendoSwitch/></p>
                        }
                        else if(p.platform.name.toLowerCase() == "android"){
                            return <p><FaAndroid/></p>
                        }
                        else if(p.platform.name.toLowerCase() == "ios"){
                            return <p><FaAppStore/></p>
                        }
                    }
                    )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        );
};

export default Banner;
