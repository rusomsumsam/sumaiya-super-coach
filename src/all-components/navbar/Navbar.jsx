import { Link } from "react-router-dom";
import navBrandImg from '../../assets/images/brandLogo.png';
import './Navbar.css'

const Navbar = () => {
    const navItems = [
        { names: 'HOME', loc: '/' },
        { names: 'ABOUT', loc: '/about' },
        { names: 'SERVICE', loc: '/service' },
        { names: 'CANCEL-TICKET', loc: '/cancel-ticket' },
        { names: 'ALBUM', loc: '/album' },
        { names: 'CONTACT', loc: '/contact' }
    ]

    const firstThreeItem = navItems.slice(0, 3);
    const lastThreeItem = navItems.slice(3);
    return (
        <div className="w-[80%] h-[100px] mx-auto bg-white text-[#095459] font-[700] absolute top-[40px] left-1/2 transform -translate-x-1/2 z-50 main_cust">
            <nav className="flex flex-row justify-between items-center text-[20px] relative h-full nav_custom">
                {/* First three items centered vertically */}
                <div className="flex flex-row justify-center items-center gap-8 h-full pl-[40px]">
                    {
                        firstThreeItem.map((items, indx) => (
                            <div key={indx}>
                                <Link to={items.loc}>{items.names}</Link>
                            </div>
                        ))
                    }
                </div>

                {/* Brand Image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[45%] w-[250px] flex justify-center items-center nav_brand_custom">
                    <img src={navBrandImg} alt="brand" />
                </div>

                {/* Last three items centered vertically */}
                <div className="flex flex-row justify-center items-center gap-8 h-full pr-[40px]">
                    {
                        lastThreeItem.map((items, indx) => (
                            <div key={indx}>
                                <Link to={items.loc}>{items.names}</Link>
                            </div>
                        ))
                    }
                </div>
            </nav>
        </div>





    );
};

export default Navbar;