import { useContext } from "react";
import { FaGamepad, FaUserAlt, FaSearch, FaSun } from "react-icons/fa"
import GameContext from "../context/GameContext";
import { FaPlaystation, FaXbox, FaWindows, FaLinux, FaApple, FaAndroid, FaAppStore, FaStar} from "react-icons/fa"
import { BsNintendoSwitch } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom"

const Header = () => {
    const {handleSearch, games, query, setQuery, loading, error, handleDetails, setGames} = useContext(GameContext)
    const navigate = useNavigate();
    const handelSelectGame = (item) => {
      setQuery(''); 
      setGames([]);
      navigate(`/game/${item.id}`);
    }
    return (
        <>
            <header className="flex justify-between p-5 gap-8 text-white">
            	<Link className="text-lg inline-flex p-1 gap-2" to={"/"}>Explore <FaGamepad className="text-3xl"/> </Link>
                <form action="" className="w-screen flex gap-3" onSubmit={handleSearch}>
                    <input type="text" placeholder="Search" className="w-full text-black outline-none rounded-lg border-2 text-sm p-2" value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button type="submit" className="bg-white text-black p-2 rounded-lg"><FaSearch/></button>
                </form>
            </header>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p>{error}</p>}
            <div className="flex flex-wrap gap-5 m-10 justify-center">
            {games.map((item, index) => (
              <div key={index} className="flex items-end relative hover:scale-110 duration-200 cursor-pointer" onClick={() => {
                handleDetails(item)
                handelSelectGame(item)
              }}>
                <img
                  src={item.background_image}
                  alt={item.name}
                  className="w-64 h-72 object-cover"
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
          )}
         </div>
        </>
    );
};

export default Header;