import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'

const NOW = new Date().getFullYear();

const LINKS = [
    {
        url: '/s',
        icon: <FaInstagram className="text-[1.7rem]"/>
    },
    {
        url: '/s',
        icon: <FaWhatsapp className="text-[1.7rem]"/>
    }
];

const LinkItem = ({ link: { url, icon } }) => {
    return (
        <a href={ url } target="_blank" className="cursor-pointer duration-300 hover:scale-110">
            <li>
                {icon}
            </li>
        </a>
    );
}
const Footer = () => {    
    return (
        <footer className="bg-__yellow">
            <div className="w-full flex mx-auto container flex-col py-3">
                <div>
                    <span className="text-[2rem]">LOGO</span>
                    <p className="md:max-w-[40%] my-3">Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability. Here are some font pairings and styles that work well for portfolio websites</p>
                    <ul className="flex gap-5 items-center">
                        {LINKS.map((link, index) => <LinkItem link={link} key={index}/>)}
                    </ul>
                </div>
                <div className="w-full h-[2px] bg-black my-3"/>
                <p>All right reserved. <Link 
                    to={'/'} 
                    onClick={() => window.scrollTo(0, 0)} 
                    className="font-bold duration-300 hover:text-__blue">
                        Steps
                    </Link> &copy; {NOW}
                </p>
            </div>
        </footer>
    )
}

export default Footer