import ScrollAnimation from "react-animate-on-scroll";
import Title from "../shared/Title/Title"
import { FaBook, FaBookOpen, FaMoon, FaSun } from "react-icons/fa6";
import './Content.css'
import FormalGirl from '../../assets/images/formal-girl.png'
import BoyWithBook from '../../assets/images/boy-with-book.png'
import BoyWithLaptop from '../../assets/images/boy-with-laptop.png'
import GirlWithBooks from '../../assets/images/girl-with-books.png'

const CONTENT = [
    {
        title: "Qoutes",
        image: BoyWithLaptop,
        icon: <FaBookOpen className="duration-300 text-[2rem] ms-16 content-card-shape-icon"/>,
        description: "Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability. Here are some font pairings and styles that work well for portfolio websites. Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability.",
    },
    {
        title: "Writings",
        image: GirlWithBooks,
        icon: <FaBook className="duration-300 text-[1.5rem] text-white ms-16 md:ms-8 content-card-shape-icon"/>,
        description: "Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability. Here are some font pairings and styles that work well for portfolio websites. Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability.",
    },
    {
        title: "Self-development",
        image: FormalGirl,
        icon: <FaMoon className="duration-300 text-[1.5rem] text-white ms-16 md:ms-8 content-card-shape-icon"/>,
        description: "Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability. Here are some font pairings and styles that work well for portfolio websites. Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability.",
    },
    {
        title: "Awareness",
        image: BoyWithBook,
        icon: <FaSun className="duration-300 text-[2rem] ms-16 content-card-shape-icon"/>,
        description: "Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability. Here are some font pairings and styles that work well for portfolio websites. Choosing the right fonts for a portfolio website is crucial as it can greatly affect the overall aesthetic and readability.",
    },
];

const ContentItem = ({ content, index }) => {
    return (
        <div className={`relative duration-300 overflow-hidden p-5 rounded-[20px] shadow-md ${(index === 0 || index === 3)? 'h-[200px] lg:h-[300px] bg-[#eee]': 'h-[200px] bg-__yellow'} ${(index === 3)? 'lg:translate-y-[-100px]': ''} cursor-pointer content-card z-10`}>
            <p className="relative z-[2] font-bold">{content.title}</p>
            <span className="underline text-[.8rem] content-card-see-more duration-300">See more</span>
            <p className={`${(index === 0 || index === 3)? 'mt-0 lg:mt-5': 'mt-0'} relative z-[2] duration-1000 opacity-0 content-card-description w-[60%] md:w-[75%] lg:w-[60%]`}>{content.description.slice(0, 150)}</p>
            <div className={`absolute duration-500 flex items-center bottom-0 z-[1] ${(index === 0 || index === 3)?'w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] right-[-15%] lg:right-[-20%] bg-white': 'w-[200px] h-[200px] right-[-15%] lg:right-[-15%] bg-black' } rounded-full content-card-shape`}/>
            <div className={`absolute duration-500 flex items-center bottom-0 z-[2] ${(index === 0 || index === 3)?'w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] right-[0%] lg:right-[-140px]': 'w-[200px] h-[200px] right-[0%] lg:right-[-80px]' }`}>            
                <img src={content.image} alt="image" className="w-full h-full lg:w-[50%] object-cover"/>
            </div>
        </div>
    );
}
const Content = () => {
    return (
        <section className="w-full bg-white py-5" id="content">
            <Title title={'Our Content'}/>
            <div className="flex gap-10 flex-wrap">
                {CONTENT.map((content, index) => 
                    <ScrollAnimation animateIn="slideInUp" className="h-full flex-[100%] lg:flex-[45%]" animateOnce={true} delay={index*50} key={index}>
                        <ContentItem content={content} index={index} key={index}/>
                    </ScrollAnimation>
                )}
            </div>
        </section>
    )
}

export default Content