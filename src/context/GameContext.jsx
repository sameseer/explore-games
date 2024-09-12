import { createContext, useState, useEffect } from "react";
import GlobalApi from "../services/GlobalApi";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeState, setActiveState] = useState(0);
  const [gamesList, setGamesList] = useState([]);
  const [genre, setGenre] = useState("action");
  const [query, setQuery] = useState(localStorage.getItem('query')); 
  const [games, setGames] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [detail, setDetail] = useState(JSON.parse(localStorage.getItem('detail'))); 

  useEffect(() => {
    getGenerList();
    getGameList();
  }, []);

  const getGameList = () => {
    GlobalApi.getGameList.then((res) => {
      setGamesList(res.data.results);
    });
  };

  const getGenerList = () => {
    GlobalApi.getGenerList.then((res) => {
      setGenreList(res.data.results);
    });
  };

  const handleGenre = (rec) => {
    setGenre(rec);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const response = await GlobalApi.searchGameList(query);
      setGames(response.data.results); 
    } catch (err) {
      setError('Failed to fetch search results');
    } finally {
      setLoading(false);
    }
  };

  const handleDetails = async (item) => {
    try {
      const response = await GlobalApi.detailsOfGames(item.id);
      setDetail(response.data);
      localStorage.setItem('detail', JSON.stringify(response.data));
    } catch (err) {
      setError('Failed to fetch game details');
    }
  };

  useEffect(() => {
    localStorage.setItem('query', query);
  }, [query]);

  return (
    <GameContext.Provider
      value={{
        genreList,
        activeState,
        setActiveState,
        gamesList,
        handleGenre,
        genre,
        handleSearch,
        games,
        query,
        setQuery,
        loading,
        error,
        handleDetails,
        detail,
        setGames,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
