import { Link, NavLink } from "react-router-dom";
import { navBarLinks } from "../../constans/links";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from "./Logo";


export const Navbar = () => {
  return <header className="bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12">
    <Logo />

    <nav className="space-x-5 hidden md:flex">
        {
            navBarLinks.map(link => (
                <NavLink
                    key={link.id}
                    to={link.href}
                    className={({isActive}) => `${isActive ? 'text-cyan-600 underline':''} transition-all duration-300 font.medium hover:text-black/30 hover:underline`}
                >
                    {link.title}
                </NavLink>
            ))
        }
    </nav>

    <div className="flex gap-5 items-center">
        <button>
            <HiOutlineSearch size={25}/>   
        </button>

        <div className="relative">
            <Link to="account" className="border-2 border-salte-700 w-9 h-9 rounded-full grid place-items-center text-lg fond-bold">e</Link>

        </div>
        <button className="relative">
            <span className="absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full"></span>
            <HiOutlineShoppingBag size={25}/>
        </button>
    </div>

    <button className="lg:hidden">
        <HiOutlineMenu size={25}/>
    </button>

        

    
    </header>;
};