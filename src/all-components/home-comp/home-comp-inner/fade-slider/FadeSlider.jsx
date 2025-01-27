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

    // Min and max dates
    const minDate = new Date(); // আজকের তারিখ
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 10); // আজ থেকে ১০ দিন পর পর্যন্ত

    useEffect(() => {
        fetch("/cityList.json") // public ফোল্ডারের মধ্যে cityList.json ফাইল
            .then(response => response.json())
            .then(data => setCity(data))
            .catch(error => console.error("Error fetching city data:", error));
    }, []);

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

    const slideContent = (
        <div className="h-full flex justify-center items-center slider_item">
            <div className="w-[950px] h-[90px] bg-[rgba(43,122,202,0.6)] text-black flex flex-row justify-center items-center gap-4 rounded-2xl slider_item_inner">
                <div className="flex flex-col w-[250px] h-[50px] bg-white rounded-2xl text-[#0b0a2d] font-[600] leaving_city">
                    <label htmlFor="leavingCity" className="px-2 text-sm text-[#237917]">Leaving From</label>
                    <select
                        id="leavingCity"
                        value={leavingCity}
                        onChange={(e) => setLeavingCity(e.target.value)}
                        className="w-full h-full bg-transparent px-2 border-0"
                    >
                        <option value="">Select City</option>
                        {
                            leavingCities.map((city, indx) => (
                                <option key={indx} value={city}>{city}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-col w-[250px] h-[50px] bg-white rounded-2xl text-[#0b0a2d] font-[600] departure_city">
                    <label htmlFor="departureCity" className="px-2 text-sm text-[#237917]">Departure To</label>
                    <select
                        id="departureCity"
                        value={departureCity}
                        onChange={(e) => setDepartureCity(e.target.value)}
                        className="w-full h-full bg-transparent px-2 border-0"
                    >
                        <option value="">Select City</option>
                        {
                            departingCities.map((city, indx) => (
                                <option key={indx} value={city}>{city}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-col w-[250px] h-[50px] bg-white px-2 rounded-2xl date_pickr">
                    <label htmlFor="datePicker" className="px-2 text-sm text-[#237917]">Select Date</label>
                    <DatePicker
                        id="datePicker"
                        className="w-full h-full px-2 border-0 text-[#0b0a2d] font-[600] outline-0"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy/MM/dd"
                        minDate={minDate}
                        maxDate={maxDate} // ১০ দিনের সীমা
                    />
                </div>
                <button className="w-[120px] h-[50px] px-2 rounded-2xl bg-[#0b0a2d] text-white font-bold src_btn">Search Now</button>
            </div>
        </div>
    );

    return (
        <div>
            <div className="w-[80%] mx-auto slide_main">
                <Slider {...settings}>
                    <div className="first_slide">{slideContent}</div>
                    <div className="second_slide">{slideContent}</div>
                    <div className="third_slide">{slideContent}</div>
                </Slider>
            </div>
        </div>
    );
};

export default FadeSlider;
