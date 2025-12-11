import { Link, NavLink } from "react-router-dom";
import { navBarLinks } from "../../constans/links";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { FaBarsStaggered } from 'react-icons/fa6';
import Logo from "./Logo";
import { useGlobalStore } from "../../store/global.store";
import { useCartStore } from "../../store/cart.store";


export const Navbar = () => {

const openSheet = useGlobalStore(state => state.openSheet);

const totalItemsInCart = useCartStore(
		state => state.totalItemsInCart
	);

const setActiveNavMobile = useGlobalStore(
		state => state.setActiveNavMobile
	);


  return <header className="bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12">
    <Logo />

    <nav className="space-x-5 hidden md:flex">
        {
            navBarLinks.map(link => (
                <NavLink
                    key={link.id}
                    to={link.href}
                    className={({ isActive }) =>
                        `transition-all duration-300 font-medium hover:text-black/30 hover:underline ${
                        isActive ? "text-cyan-600 underline" : ""
                    }`
                }

                >
                    {link.title}
                </NavLink>
            ))
        }
    </nav>

    <div className="flex gap-5 items-center">
        <button aria-label="Buscar" onClick={() => openSheet('search')}>
            <HiOutlineSearch size={25} />
        </button>


        <div className="relative">
            <Link to="account" className="border-2 border-slate-700 w-9 h-9 rounded-full grid place-items-center text-lg font-bold">e</Link>

        </div>
        <button className="relative" onClick={() => openSheet('cart')}>
            <span className="absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full">
                {totalItemsInCart}
            </span>
            <HiOutlineShoppingBag size={25}/>
        </button>
    </div>

    <button className="lg:hidden" onClick={() => setActiveNavMobile(true)}>
        <FaBarsStaggered size={25} />
    </button>


        

    
    </header>;
};