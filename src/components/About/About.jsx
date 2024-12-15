import { FaClock } from "react-icons/fa6";
import Title from "../shared/Title/Title"
import { FaCalendarAlt, FaHistory } from 'react-icons/fa'
import ScrollAnimation from "react-animate-on-scroll";
import Goal from '../../assets/images/girl-with-laptop.webp'
import Girl from '../../assets/images/girl.webp'
import { useTranslation } from "react-i18next";
import useLanguageStore from "../../stores/language";
import './About.css'
import generateAltImageText from "../../helpers/generateAltImageText";

const Card = ({ card }) => {
    const language = useLanguageStore((state) => state.language);
    const en = language === "en" ? "about-card-en":"";

    return (
        <div className={`rounded-[20px] p-5 shadow-md flex-1 min-[1535px]:h-[160px] ${en}`} style={{ backgroundColor: card.color }}>
            <h2 className="flex items-center gap-5 font-bold text-[1.3rem] mb-2" style={{ color: card.textColor }}>
                {card.title}
                {card.icon}
            </h2>
            <p className="text-[1.1rem] leading-10" style={{ color: card.textColor }}>{card.description}</p>
        </div>
    );
}
const About = () => {
    const { t } = useTranslation();

    const CARDS = [
        {
            icon: <FaHistory/>,
            title: t("EachQoute"),
            description: t("EachQouteText"),
            color: "black",
            textColor: "white"
        },
        {
            icon: <FaClock/>,
            title: t("EachReel"),
            description: t("EachReelText"),
            color: "#eee",
            textColor: "black"
        },
        {
            icon: <FaCalendarAlt/>,
            title: t("EachStory"),
            description: t("EachStoryText"),
            color: "#ffde59",
            textColor: "black"
    
        },
    ];

    return (
        <section className="w-full bg-white py-5" id="about">
            <div className="mb-10 w-full">
                <div className="flex justify-between items-center flex-col lg:flex-row w-full mb-10">
                    <div>
                        <Title title={t('AboutUs')}/>
                        <p className="text-[1.2rem] leading-10">{t("AboutUsContent")}</p>
                    </div>
                    <div className="overflow-hidden mx-auto max:w-[300px] lg:max-w-[500px]">
                        <img src={Girl} alt={generateAltImageText(Girl)} className="w-full h-full"/>
                    </div>
                </div>
                <Title title={t('WeBelieve')} center={true}/>
                <div className="flex justify-between items-center gap-10 mt-10 flex-wrap w-full">
                    {CARDS.map((card, index) => 
                        <ScrollAnimation animateIn="slideInUp" className="h-full flex-[100%] md:flex-[30%]" animateOnce={true} delay={index*50} key={index}>
                            <Card card={card} key={index}/>
                        </ScrollAnimation>
                    )}
                </div>
            </div>
            {/* <Title title={'Our Goal'} center={true}/> */}
            <div className="relative mb-5 mt-[50px]">
                <ScrollAnimation animateIn="slideInLeft" animateOnce={true} delay={0}>
                    <div className="w-full md:w-[600px] h-[500px] rounded-[50px] overflow-hidden mx-auto translate-y-[-20px]">
                        <img src={Goal} alt={generateAltImageText(Goal)} className="w-full h-full"/>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInRight" animateOnce={true} delay={50}>
                    <div className="w-full absolute left-0 bottom-[-50px] md:bottom-[-30px] p-5 rounded-[50px] bg-__yellow shadow-md flex flex-col md:flex-row items-center gap-5">
                        <h1 className="text-nowrap font-bold text-[3rem]">{t("OurGoal")}</h1>
                        <p>{t("OurMission")}</p>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default About