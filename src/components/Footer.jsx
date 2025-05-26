import { FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaTiktok, FaPhone } from "react-icons/fa6";
import "../assets/styles/components/footer.scss"
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer-area bg-black mt-20'>
      <div className='container mx-auto px-6'>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="box-logo-bio md:pr-20">
                <a href="https://montink.com/" target='blank'>
                    <img className='' src="https://sou.montink.com/wp-content/uploads/2024/04/logo-white.png" alt="MontInk" />
                </a>
                <p className="text-white block mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim velit, fringilla at massa non, sagittis dignissim ipsum. Vestibulum quam nunc, hendrerit sit amet ultricies at, eleifend quis enim.</p>
                <div className="box-socials flex gap-4 mt-4">
                    <a href="#" className="icons">
                        <FaInstagram />
                    </a>
                    <a href="#" className="icons">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="icons">
                        <FaYoutube />
                    </a>                             
                    <a href="#" className="icons">
                        <FaTiktok />
                    </a>                             
                </div>
            </div>

                

            <div className="box-important-links mt-5 md:mt-0">
                <h2 className="text-white font-bold mb-5 text-xl">Important Links</h2>
                <ul>
                    <li><NavLink to="/" className="text-white hover:text-orange-200">Home</NavLink></li>
                    <li><a className="text-white hover:text-orange-200" href="#">About</a></li>
                    <li><a className="text-white hover:text-orange-200" href="#">Blog</a></li>
                    <li><a className="text-white hover:text-orange-200" href="#">Contact</a></li>
                </ul>
            </div>

            <div className="box-normal-links mt-5 md:mt-0">
                <h2 className="text-white font-bold mb-5 text-xl">Links</h2>
                <ul>
                    <li><NavLink to="/" className="text-white hover:text-orange-200">Home</NavLink></li>
                    <li><a className="text-white hover:text-orange-200" href="#">About</a></li>
                    <li><a className="text-white hover:text-orange-200" href="#">Blog</a></li>
                    <li><a className="text-white hover:text-orange-200" href="#">Contact</a></li>
                </ul>
            </div>

            <div className="box-contact mt-5 md:mt-0">
                <h2 className="text-white font-bold mb-5 text-xl">Contact</h2>
                <ul>
                    <li>
                        <a className="box-icon flex items-center text-white hover:text-orange-200" href="mailto:someone@example.com">
                            <FaEnvelope />
                            teste@teste.com
                        </a>
                    </li>
                    <li>
                        <a className="box-icon flex items-center text-white hover:text-orange-200" href="tel:+553112345678">
                            <FaPhone />
                            +55 31 1234-5678
                        </a>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer