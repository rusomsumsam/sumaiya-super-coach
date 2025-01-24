import Marquee from "react-fast-marquee";
import '../navbar/Navbar.css';

const TopMarquee = () => {
    return (
        <div>
            <div className="w-[80%] mx-auto text-[#9b0a0a] font-[600] text-[20px] mar_cust">
                <Marquee>
                    <p>Our transportation services are now more accessible with new routes! Enjoy affordable fares, on-time departures, and eco-friendly travel. Book your journey today!</p>
                </Marquee>
            </div>
        </div>
    );
};

export default TopMarquee;