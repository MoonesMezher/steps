import { FaClock } from "react-icons/fa6";
import Title from "../shared/Title/Title"
import { FaCalendarAlt, FaHistory } from 'react-icons/fa'
import ScrollAnimation from "react-animate-on-scroll";
import Goal from '../../assets/images/idea.jpeg'
import Girl from '../../assets/images/girl.png'

const CARDS = [
    {
        icon: <FaHistory/>,
        title: "Past",
        description: "Choosing the right fonts for a portfolio website is crucial as it can greatly affect the",
        color: "black",
        textColor: "white"
    },
    {
        icon: <FaClock/>,
        title: "Present",
        description: "Choosing the right fonts for a portfolio website is crucial as it can greatly affect the",
        color: "#eee",
        textColor: "black"
    },
    {
        icon: <FaCalendarAlt/>,
        title: "Future",
        description: "Choosing the right fonts for a portfolio website is crucial as it can greatly affect the",
        color: "#ffde59",
        textColor: "black"

    },
];

const Card = ({ card }) => {
    return (
        <div className={`rounded-[20px] p-5 shadow-md flex-1`} style={{ backgroundColor: card.color }}>
            <h2 className="flex items-center gap-5 font-bold text-[1.3rem] mb-2" style={{ color: card.textColor }}>
                {card.title}
                {card.icon}
            </h2>
            <p className="text-[1.1rem] leading-10" style={{ color: card.textColor }}>{card.description}</p>
        </div>
    );
}
const About = () => {
    return (
        <section className="w-full bg-white py-5" id="about">
            <div className="mb-10 w-full">
                <div className="flex justify-between items-center flex-col lg:flex-row w-full">
                    <div>
                        <Title title={'About us'}/>
                        <p className="text-[1.2rem] leading-10">Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability. Here are some font pairings and styles that work well for portfolio websites.
                        Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability. Here are some font pairings and styles that work well for portfolio websites</p>
                    </div>
                    <div className="overflow-hidden mx-auto w-[300px] lg:w-[100%]">
                        <img src={Girl} alt="girl" className="w-full h-full"/>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-10 mt-10 flex-wrap">
                    {CARDS.map((card, index) => 
                        <ScrollAnimation animateIn="slideInUp" className="h-full md:flex-[30%]" animateOnce={true} delay={index*50} key={index}>
                            <Card card={card} key={index}/>
                        </ScrollAnimation>
                    )}
                </div>
            </div>
            {/* <Title title={'Our Goal'} center={true}/> */}
            <div className="relative mb-5">
                <ScrollAnimation animateIn="slideInLeft" animateOnce={true} delay={0}>
                    <div className="w-full h-[500px] rounded-[50px] overflow-hidden">
                        <img src={Goal} className="w-full h-full object-cover"/>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInRight" animateOnce={true} delay={50}>
                    <div className="w-full absolute left-0 bottom-[-50px] md:bottom-[-30px] p-5 rounded-[50px] bg-__yellow shadow-md flex flex-col md:flex-row items-center gap-5">
                        <h1 className="text-nowrap font-bold text-[3rem]">Our Goal</h1>
                        <p>Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability. Here are some font pairings and styles that work well for portfolio websites.
                        Choosing the right fonts for a portfolio</p>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default About