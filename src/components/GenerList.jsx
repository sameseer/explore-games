import { useContext } from "react";
import GameContext from "../context/GameContext";


const GenerList = () => {
	const { genreList, activeState, setActiveState, handleGenre } = useContext(GameContext)
    return (
        <div className="w-52">
            <h1 className="text-3xl font-extrabold">Genre</h1>
            { genreList.map((item,index) => (
            	<div key={index} className={`cursor-pointer flex items-center gap-3 mt-3 hover:bg-zinc-900 p-2 rounded-lg duration-200 hover:scale-105 ${activeState==index? "bg-zinc-900 scale-105": null}`} onClick={() => {
            		setActiveState(index)
            		handleGenre(item.slug)
            	}}>
            		<img src={item.image_background} alt="pic" className="w-[60px] h-[60px] rounded-lg object-cover"/>
            		<h1>{item.name}</h1>
            	</div>
            ))}
        </div>
    );
};

export default GenerList;