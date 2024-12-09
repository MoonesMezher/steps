import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { useTranslation } from "react-i18next";
import useLanguageStore from "../../stores/language";

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
    const { t } = useTranslation();

    const language = useLanguageStore((state) => state.language);

    return (
        <footer className={`bg-__yellow`} dir={language === 'en'? 'ltr':'rtl'}>
            <div className="w-full flex mx-auto container flex-col py-3">
                <div>
                    <span className="text-[2rem]">LOGO</span>
                    <p className="md:max-w-[50%] lg:max-w-[40%] my-3">{t("Footer")}</p>
                    <ul className="flex gap-5 items-center">
                        {LINKS.map((link, index) => <LinkItem link={link} key={index}/>)}
                    </ul>
                </div>
                <div className="w-full h-[2px] bg-black my-3"/>
                <p className={`text-center ${language === 'en'? 'sm:text-left': 'sm:text-right'} flex gap-2`}>{t("Reserved")}<Link 
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