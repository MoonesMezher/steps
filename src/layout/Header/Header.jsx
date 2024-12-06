import './Header.css'
import { FaArrowUp, FaBars, FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";

const LINKS = [
    {
        title: 'Home',
        url: '/#home'
    },
    {
        title: 'Content',
        url: '/#content'
    },
    {
        title: 'About',
        url: '/#about'
    },
    {
        title: 'Contact',
        url: '/#contact'
    },
];

const LinkItem = ({ link: { url, title }, setOpen }) => {
    return (
        <a href={ url } className="header_main_link" onClick={() => setOpen(false)}>
            <li className="text-[1.5rem]">{ title }</li>
        </a>
    );
}

const LanguageChanger = () => {
    const [language, setLanguage] = useState("EN");

    return (
        <div className='cursor-pointer shadow-md bg-black px-5 py-3 rounded-md text-white' onClick={() => setLanguage(language === "EN"? "AR": "EN")}>
            {language === "EN"? "Arabic":"أجنبي"}
        </div>
    );
}

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setScroll(window.scrollY > 10);
            setScrollToTop(window.scrollY > 500);            
        };
    }, []);

    return (
        <header className={`w-full fixed left-0 top-0 z-[100] duration-500 ${scroll? 'bg-__yellow shadow-md':'bg-transparent'}`}>
            <div className="w-full flex justify-between items-center mx-auto container py-3">
                <span className="text-[2rem]">LOGO</span>
                <ul className="justify-center items-center gap-5 hidden md:flex">
                    {LINKS.map((link, index) => <LinkItem link={link} key={index} setOpen={setOpen}/>)}
                    <LanguageChanger/>
                </ul>
                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {open? <FaXmark className="text-[2rem]"/>:<FaBars className="text-[2rem]"/>}
                </div>
                <ul className={`justify-center items-center gap-5 flex flex-col fixed ${open? 'left-0':'left-[-100%]'} top-[50px] w-full bg-__yellow z-50 shadow-md p-5 duration-300`}>
                    {LINKS.map((link, index) => <LinkItem link={link} key={index} setOpen={setOpen}/>)}
                    <LanguageChanger/>
                </ul>
            </div>
            <div className={`p-1 bg-black rounded-full flex justify-center items-center w-[50px] h-[50px] overflow-hidden shadow-md fixed ${scrollToTop? 'right-[20px] bottom-[10px] opacity-100 scale-100': 'right-[-50px] bottom-[-40px] opacity-0 scale-0'} z-[100] border-[3px] border-solid border-black cursor-pointer duration-300 hover:bg-__yellow scroll-to-top-btn`} onClick={() => window.scrollTo(0, 0)}>
                <FaArrowUp className="text-white text-[1.3rem] scroll-to-top-icon"/>
            </div>
        </header>
    )
}

export default Header