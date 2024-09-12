import GenerList from "../components/GenerList";
import Banner from "../components/Banner";
import GamesList from "../components/GamesList"

const Home = () => {
    return (
        <div className="flex p-5 gap-24 overflow-hidden">
            <div className="">
                <GenerList/>
            </div>
            <div className="grow">
                <Banner/>
                <GamesList/>
            </div>
		</div>    
	);
};

export default Home;