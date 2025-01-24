import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../fade-slider/FadeSlider.css';

const FadeSlider = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
        
    };
    return (
        <div>
            <div className="w-[80%] mx-auto">
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