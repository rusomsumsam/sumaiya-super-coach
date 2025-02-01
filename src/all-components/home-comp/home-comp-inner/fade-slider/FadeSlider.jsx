import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../fade-slider/FadeSlider.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FadeSlider = ({ cityData }) => {
    const navigate = useNavigate();

    const { leavingCities, departingCities } = cityData;
    const [dates, setDates] = useState("Select Date");
    const [leavingCity, setLeavingCity] = useState("Select Leaving City");
    const [departingCity, setDepartingCity] = useState("Select Destination City");
    const [errors, setErrors] = useState({ leavingCityError: false, departingCityError: false, dateError: false})

    const leavingCityHandler = (e) => {
        const getLeavingCity = e.target.value;
        setLeavingCity(getLeavingCity);
        setErrors(prev => ({ ...prev, leavingCityError: getLeavingCity === "Select Leaving City" }));
    }
    const departingCityHandler = (e) => {
        const getDepartingCity = e.target.value;
        setDepartingCity(getDepartingCity);
        setErrors(prev => ({ ...prev, departingCityError: getDepartingCity === "Select Destination City" }));
    }
    const datesHandler = (selectedDates) => {
        if (selectedDates.length > 0) {
            const getDate = selectedDates[0]; // প্রথম তারিখ নেওয়া
            setDates(getDate);
            setErrors(prev => ({ ...prev, dateError: false }));
        } else {
            setDates("Select Date");
            setErrors(prev => ({ ...prev, dateError: true }));
        }
    };

    const formHandler = (e) => {
        e.preventDefault();
        setErrors(prev => ({ ...prev, leavingCityError: leavingCity === "Select Leaving City" }));
        setErrors(prev => ({ ...prev, departingCityError: departingCity === "Select Destination City" }));
        setErrors(prev => ({ ...prev, dateError: dates === "Select Date" }));
        if (leavingCity !== "Select Leaving City" && departingCity !== "Select Destination City" && dates !== "Select Date") {
            navigate('/bus-list');
        }
    }



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

    const sliderContent = (
        <div className="w-full h-full flex flex-row justify-center items-center">
            <form onSubmit={formHandler} className="w-[800px] h-[190px] flex flex-col justify-center items-center gap-4 form_cus">
                <div className="w-full h-[130px] bg-[rgba(7,6,48,0.9)] flex flex-row justify-center items-center rounded-2xl gap-4 form_cus_inner">
                    <div className="w-[240px] h-[60px] flex flex-col bg-white rounded-2xl px-4 item_cus">
                        <label className="text-[#137701] pl-[20px] text-[20px] font-[600]">Leaving From</label>
                        <select
                            value={leavingCity}
                            onChange={leavingCityHandler}
                            className={`text-[#070630] border-0 pl-[20px] text-[18px] font-[500] ${errors.leavingCityError ? "border-2 border-red-700 rounded-2xl" : "border-0"}`}
                        >
                            {
                                leavingCities.map((cities, indx) => (
                                    <option key={indx} value={cities.value}>{cities.label}</option>
                                ))
                            }
                        </select>
                        {
                            errors.leavingCityError ? <p className="text-red-700 pl-[20px] font-[600]">Select One!</p> : <p></p>
                        }
                    </div>
                    <div className="w-[240px] h-[60px] flex flex-col bg-white rounded-2xl px-4 item_cus">
                        <label className="text-[#137701] pl-[20px] text-[20px] font-[600]">Departing To</label>
                        <select
                            value={departingCity}
                            onChange={departingCityHandler}
                            className={`text-[#070630] border-0 pl-[20px] text-[18px] font-[500] ${errors.departingCityError ? "border-2 border-red-700 rounded-2xl" : "border-0"}`}
                        >
                            {
                                departingCities.map((cities, indx) => (
                                    <option key={indx} value={cities.value}>{cities.label}</option>
                                ))
                            }
                        </select>
                        {
                            errors.departingCityError ? <p className="text-red-700 pl-[20px] font-[600]">Select One!</p> : <p></p>
                        }
                    </div>
                    {/* Flatpickr Date Picker */}
                    <div className="w-[240px] h-[60px] flex flex-col bg-white rounded-2xl px-4 item_cus">
                        <label className="text-[#137701] pl-[20px] text-[20px] font-[600]">Select Date</label>
                        <Flatpickr
                            value={dates}
                            onChange={datesHandler}
                            options={{
                                dateFormat: "d/m/Y",
                                minDate: "today",
                                maxDate: new Date().fp_incr(10), // 10 দিন পর পর্যন্ত
                            }}
                            placeholder="Select Date"
                            className={`text-[#070630] border-0 pl-[20px] text-[18px] font-[500] focus:outline-none ${errors.dateError ? "border-2 border-red-700 rounded-2xl" : "border-0"}`}
                        />
                        {
                            errors.dateError ? <p className="text-red-700 pl-[20px] font-[600]">Select One!</p> : <p></p>
                        }
                    </div>
                </div>
                <button className="w-[200px] bg-[#137701] py-4 rounded-2xl text-[18px] font-[700]">Search Bus</button>
            </form>
        </div>
    );

    return (
        <div>
            <div className="w-[80%] mx-auto slide_main">
                <Slider {...settings}>
                    <div className="first_slide">{ sliderContent }</div>
                    <div className="second_slide">{ sliderContent }</div>
                    <div className="third_slide">{ sliderContent }</div>
                </Slider>
            </div>
        </div>
    );
};

// ✅ Prop validation
FadeSlider.propTypes = {
    cityData: PropTypes.shape({
        leavingCities: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })
        ).isRequired,
        departingCities: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};


export default FadeSlider;
