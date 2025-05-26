import { FaCartShopping  } from "react-icons/fa6";
import "../assets/styles/components/navbar.scss"
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header-area">
      <div className="bg-orange-200 py-2">
        <div className='container mx-auto px-6'>
          <div className="flex justify-between sm:grid sm:grid-flow-col gap-2">
            <div className="box-logo w-28 sm:w-40">
              <Link to={`/`}>
                <img className='' src="https://sou.montink.com/wp-content/uploads/2024/04/logo.png" alt="Montink" title="Montink" />
              </Link>
            </div>

            <div className="box-right flex justify-items-center justify-end items-center cursor-pointer">
              <div className="icon-cart text-white text-2xl w-8 h-8 rounded-full flex bg-orange-400 items-center justify-center">
                <FaCartShopping />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-menu-links mb-10 shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
        <div className="container mx-auto py-2">
          <ul className="flex justify-center items-center">
            <li><NavLink to="/" className="">Home</NavLink></li>
            <li><a className="hover:text-orange-200" href="#">About</a></li>
            <li><a className="hover:text-orange-200" href="#">Blog</a></li>
            <li><a className="hover:text-orange-200" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar


