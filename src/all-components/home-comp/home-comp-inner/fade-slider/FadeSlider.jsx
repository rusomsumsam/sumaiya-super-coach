import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../fade-slider/FadeSlider.css';

const FadeSlider = () => {
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
    return (
        <div>
            <div className="w-[80%] mx-auto slide_main">
                <Slider {...settings}>
                    <div className="first_slide"></div>
                    <div className="second_slide"></div>
                    <div className="third_slide"></div>
                </Slider>
            </div>
        </div>
    );
};

export default FadeSlider;