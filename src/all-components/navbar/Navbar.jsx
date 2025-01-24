import { Link } from "react-router-dom";
import navBrandImg from '../../assets/images/brandLogo.png';
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FaTimesCircle } from "react-icons/fa";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const navItems = [
        { names: 'HOME', icon: <FaHome />, loc: '/' },
        { names: 'ABOUT', icon: <FaInfoCircle />, loc: '/about' },
        { names: 'SERVICE', icon: <GrServices />, loc: '/service' },
        { names: 'CANCEL-TICKET', icon: <FaTimesCircle />, loc: '/cancel-ticket' },
        { names: 'ALBUM', icon: <BiSolidPhotoAlbum />, loc: '/album' },
        { names: 'CONTACT', icon: <FaPhoneVolume />, loc: '/contact' }
    ]

    const user = [
        { names: 'USER', icon: <FaUserCircle /> }
    ]

    const firstThreeItem = navItems.slice(0, 3);
    const lastThreeItem = navItems.slice(3);
    return (
        <div className="w-[80%] h-[100px] mx-auto bg-white text-[#095459] font-[700] absolute top-[40px] left-1/2 transform -translate-x-1/2 z-50 main_cust">
            <nav className="flex flex-row justify-between items-center text-[20px] relative h-full nav_custom">
                {/* First three items centered vertically */}
                <div className="hidden lg:flex flex-row justify-center items-center gap-8 h-full pl-[40px]">
                    {
                        firstThreeItem.map((items, indx) => (
                            <div key={indx}>
                                <Link to={items.loc}>{items.names}</Link>
                            </div>
                        ))
                    }
                </div>

                {/* Brand Image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[45%] w-[250px] hidden lg:flex justify-center items-center nav_brand_custom">
                    <img src={navBrandImg} alt="brand" />
                </div>

                {/* Last three items centered vertically */}
                <div className="hidden lg:flex flex-row justify-center items-center gap-8 h-full pr-[40px]">
                    {
                        lastThreeItem.map((items, indx) => (
                            <div key={indx}>
                                <Link to={items.loc}>{items.names}</Link>
                            </div>
                        ))
                    }
                </div>
                {/* For Responsive Menu */}
                <div className="drawer block lg:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="pl-[10px] drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn bg-[#095459] text-[20px] drawer-button"><GiHamburgerMenu /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="menu bg-[#095459] text-base-content min-h-full w-[240px] p-4">
                            {/* Close button */}
                            <div className="w-full flex justify-end">
                                <button
                                    onClick={() => document.getElementById('my-drawer').checked = false}
                                    className="text-white text-[18px] font-bold"
                                >
                                    <IoClose />
                                </button>
                            </div>
                            {/* Brand logo */}
                            <div className="w-[full] flex justify-center mb-[30px]">
                                <div className="w-[100px] ">
                                    <img src={navBrandImg} alt="brand" />
                                </div>
                            </div>
                            {/* Navigation items */}
                            <div className="flex flex-col gap-4 text-[16px]">
                                {
                                    navItems.map((items, indx) => (
                                        <div key={indx} className="flex flex-row gap-2 items-center">
                                            <Link to={items.loc}>{items.icon}</Link>
                                            <Link to={items.loc}>{items.names}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="block lg:hidden pr-[10px]">
                    {
                        user.map((item, indx) => (
                            <div key={indx} className="text-[28px]">
                                <Link>{ item.icon }</Link>
                            </div>
                        ))
                    }
                </div>
            </nav>
        </div>





    );
};

export default Navbar;