import Header from "./components/Header";
import { GameProvider } from "./context/GameContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GamesDetail from "./pages/GamesDetail";


const App = () => {
    return (
      <GameProvider>
        <Router>
            <div className="bg-black text-white h-full">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game/:id" element={<GamesDetail />} />
                </Routes>
            </div>
        </Router>
      </GameProvider>
    );
};

export default App;