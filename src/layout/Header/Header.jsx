import './Header.css'
import { FaArrowUp, FaBars, FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import useLanguageStore from '../../stores/language';
import Logo from '../../assets/images/logo-2.webp'
import { Link } from 'react-router-dom';
import generateAltImageText from '../../helpers/generateAltImageText';
const LinkItem = ({ link: { url, title }, setOpen }) => {
    return (
        <a href={ url } className="header_main_link" onClick={() => setOpen(false)}>
            <li className="text-[1.5rem]">{ title }</li>
        </a>
    );
}

const LanguageChanger = ({ setLoadingAfterChangeLanguage, setOpen }) => {
    const setLanguage = useLanguageStore((state) => state.setLanguage);

    const changeLanguage = () => {
        setLoadingAfterChangeLanguage(true);
        setTimeout(() => {
            if(localStorage.getItem("language")) {
                i18n.changeLanguage(localStorage.getItem("language") === "en" ? "ar": "en");
                localStorage.setItem("language", localStorage.getItem("language") === "en" ? "ar": "en");
            } else {
                i18n.changeLanguage("ar");
                localStorage.setItem("language", "ar");
            }
            setLanguage(localStorage.getItem("language"));
            setLoadingAfterChangeLanguage(false);
            setOpen(false);
        }, 1000);
    };

    return (
        <div className='cursor-pointer shadow-md bg-black px-5 py-3 rounded-md text-white' onClick={changeLanguage}>
            {localStorage.getItem("language") === "ar"? "أجنبي":"Arabic"}
        </div>
    );
}

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [scrollToTop, setScrollToTop] = useState(false);
    const [loadingAfterChangeLanguage, setLoadingAfterChangeLanguage] = useState(false);

    const { t } = useTranslation();

    const lang = useLanguageStore((state) => state.language);

    const LINKS = [
        {
            title: t('Home'),
            url: '/#home'
        },
        {
            title: t('About'),
            url: '/#about'
        },
        {
            title: t('Content'),
            url: '/#content'
        },
        {
            title: t('Contact'),
            url: '/#contact'
        },
    ];

    useEffect(() => {
        window.onscroll = () => {
            setScroll(window.scrollY > 10);
            setScrollToTop(window.scrollY > 500);            
        };
    }, []);

    const scrollToTopBtn = useRef();

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
        // scrollToTopBtn.current.focus(() => {
        //     return false;
        // });
    };

    return (
        <header dir={lang === 'ar'? 'rtl': 'ltr'} className={`w-full fixed left-0 top-0 z-[100] duration-500 ${scroll? 'bg-__yellow shadow-md':'bg-transparent'}`}>
            <div className="w-full flex justify-between items-center mx-auto container py-3">
                <div className='w-[60px] h-[60px] bg-white rounded-full'>
                    <Link to={'/'} onClick={() => window.scrollTo(0, 0)} >
                        <img src={Logo} alt={generateAltImageText(Logo)} className='w-full h-full'/>
                    </Link>
                </div>
                <ul className="justify-center items-center gap-5 hidden md:flex">
                    {LINKS.map((link, index) => <LinkItem link={link} key={index} setOpen={setOpen}/>)}
                    <LanguageChanger setOpen={setOpen} setLoadingAfterChangeLanguage={setLoadingAfterChangeLanguage}/>
                </ul>
                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {open? <FaXmark className="text-[2rem]"/>:<FaBars className="text-[2rem]"/>}
                </div>
                <ul className={`justify-center items-center gap-5 flex flex-col fixed ${open? 'left-0':'left-[-100%]'} top-[70px] w-full bg-__yellow z-50 shadow-md p-5 duration-300`}>
                    {LINKS.map((link, index) => <LinkItem link={link} key={index} setOpen={setOpen}/>)}
                    <LanguageChanger setOpen={setOpen} setLoadingAfterChangeLanguage={setLoadingAfterChangeLanguage}/>
                </ul>
            </div>
            <div ref={scrollToTopBtn} className={`p-1 bg-black rounded-full flex justify-center items-center w-[50px] h-[50px] overflow-hidden shadow-md fixed ${scrollToTop? 'right-[20px] bottom-[10px] opacity-100 scale-100': 'right-[-50px] bottom-[-40px] opacity-0 scale-0'} z-50] border-[3px] border-solid border-black cursor-pointer duration-300 hover:bg-__yellow scroll-to-top-btn`} onClick={handleScrollToTop}>
                <FaArrowUp className="text-white text-[1.3rem] scroll-to-top-icon"/>
            </div>
            {loadingAfterChangeLanguage && <div className="fixed left-0 top-0 w-full h-full z-[50] bg-black opacity-50 flex justify-center items-center">
                <div className="w-[100px] h-[100px] rounded-full animate-spin border-transparent border-r-__yellow border-4"/>
            </div>}
        </header>
    )
}

export default Header