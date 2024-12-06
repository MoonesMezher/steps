import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import Phone from '../../assets/images/phone.png'
import Help from '../../assets/images/help.jpeg'
import Idea from '../../assets/images/idea.jpeg'
import './Hero.css'
import { useEffect, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Extra from '../shared/Extra/Extra'

const SLIDES = [
    Help,
    Idea
];

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

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const counter = setInterval(() => {
            setCurrentImage(prev => (prev+1) % 2);
        }, 4000);

        return () => clearInterval(counter);
    }, []);

    return (
        <section className="mb-[8px] flex flex-col justify-center h-[98vh]" id="home">
            <div className="w-[99%] h-[98%] rounded-[20px] bg-__yellow absolute left-[.5%] top-[8px] z-[-1]"/>

            <Extra key={1} size={'w-[150px] h-[150px]'} xPoint={"left-[10%]"} yPoint={"top-[10%]"}/>
            <Extra key={2} size={'w-[100px] h-[100px]'} xPoint={"right-[15%]"} yPoint={"top-[15%]"}/>
            <Extra key={3} size={'w-[50px] h-[50px]'} xPoint={"left-[23%]"} yPoint={"top-[23%]"}/>
            <Extra key={4} size={'w-[80px] h-[80px]'} xPoint={"left-[45%]"} yPoint={"top-[45%]"}/>
            <Extra key={5} size={'w-[250px] h-[250px]'} xPoint={"right-[10%]"} yPoint={"bottom-[19%]"}/>
            <Extra key={6} size={'w-[150px] h-[150px]'} xPoint={"left-[19%]"} yPoint={"bottom-[19%]"}/>
            <Extra key={7} size={'w-[110px] h-[110px]'} xPoint={"left-[5%]"} yPoint={"bottom-[5%]"}/>
            <Extra key={8} size={'w-[60px] h-[60px]'} xPoint={"right-[40%]"} yPoint={"top-[5%]"}/>

            <div className='flex flex-col md:flex-row justify-around items-center gap-10'>
                <ScrollAnimation animateIn="slideInLeft" animateOnce={true} delay={0}>
                    <div className='min-[1021px]:max-w-[50%]'>
                        <h1 className="text-[4rem] font-bold">Steps</h1>
                        <p className=" my-3 leading-10 text-[1.2rem]">Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability. Here are some font pairings and styles that work well for portfolio websites</p>
                        <ul className="flex gap-5 items-center">
                            {LINKS.map((link, index) => <LinkItem link={link} key={index}/>)}
                        </ul>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInRight" animateOnce={true} delay={0}>
                    <div className='w-fit phone-slider'>
                        <div className='w-[200px] md:w-[300px] relative'>
                            <img src={Phone} className='w-full h-full phone-image object-cover' alt='phone mockup'/>
                            {SLIDES.map((slide, index) => <div key={index} className={`absolute left-[7.5px] top-[2.1%] md:top-[1%] z-[-1] w-[185px] md:w-[285px] h-[98%] rounded-[40px] overflow-hidden duration-500 ${(index === currentImage)? 'scale-100 opacity-100':'scale-100 opacity-0'}`}>
                                <img src={slide} alt='image' className='w-full h-full object-cover'/>
                            </div>)}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default Hero