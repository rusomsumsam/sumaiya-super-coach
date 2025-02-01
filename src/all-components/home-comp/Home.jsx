import FadeSlider from "./home-comp-inner/fade-slider/FadeSlider";
import '../home-comp/Home.css';
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const cityData = useLoaderData();
    return (
        <div className="mt-[100px] slidr_cst">
            <FadeSlider cityData={cityData}></FadeSlider>
        </div>
    );
};

export default Home;