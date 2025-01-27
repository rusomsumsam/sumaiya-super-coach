import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../fade-slider/FadeSlider.css';
import { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FadeSlider = () => {
    const [city, setCity] = useState(null);
    const [leavingCity, setLeavingCity] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        fetch("/cityList.json")  // public ফোল্ডারের মধ্যে cityList.json ফাইল
            .then(response => response.json())
            .then(data => setCity(data))
            .catch(error => console.error("Error fetching city data:", error));
    }, []);

    console.log(city);

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    if (!city) {
        return <div>Loading...</div>;
    }
    const { departingCities, leavingCities } = city;
    return (
        <div>
            <div className="w-[80%] mx-auto slide_main">
                <Slider {...settings}>
                    <div className="first_slide">
                        <div className="h-full flex justify-center items-center">
                            <div className="w-[950px] h-[90px] bg-[#2b7aca] text-black flex flex-row justify-center items-center gap-4 rounded-2xl">
                                <div className="w-[250px] h-[50px] bg-white rounded-2xl text-[#0b0a2d] font-[600]">
                                    <select
                                        value={leavingCity}
                                        onChange={(e) => setLeavingCity(e.target.value)}
                                        className="w-full h-full bg-transparent px-2 border-0"
                                    >
                                        <option value="">Leaving From</option>
                                        {
                                            leavingCities.map((city, indx) => (
                                                <option key={indx} value={city}>{city}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="w-[250px] h-[50px] bg-white rounded-2xl text-[#0b0a2d] font-[600]">
                                    <select
                                        value={departureCity}
                                        onChange={(e) => setDepartureCity(e.target.value)}
                                        className="w-full h-full bg-transparent px-2 border-0"
                                    >
                                        <option value="">Departure To</option>
                                        {
                                            departingCities.map((city, indx) => (
                                                <option key={indx} value={city}>{city}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="w-[250px] h-[50px] bg-white px-2 flex items-center rounded-2xl">
                                    <DatePicker
                                        className="w-[250px] h-[50px] px-2 border-0 text-[#0b0a2d] font-[600] outline-0"
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        dateFormat="yyyy/MM/dd"
                                    />
                                </div>
                                <button className="w-[120px] h-[50px] px-2 rounded-2xl bg-[#0b0a2d] text-white font-bold">Search Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="second_slide"></div>
                    <div className="third_slide"></div>
                </Slider>
            </div>
        </div>
    );
};

export default FadeSlider;