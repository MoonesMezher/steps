import ScrollAnimation from "react-animate-on-scroll";
import Title from "../shared/Title/Title"
import './Content.css'
import FormalGirl from '../../assets/images/formal-girl.webp'
import BoyWithBook from '../../assets/images/boy-with-book.webp'
import BoyWithLaptop from '../../assets/images/boy-with-laptop.webp'
import GirlWithBooks from '../../assets/images/girl-with-books.webp'
import { useTranslation } from "react-i18next";
import useLanguageStore from "../../stores/language";
import generateAltImageText from "../../helpers/generateAltImageText";

const ContentItem = ({ content, index }) => {
    const { t } = useTranslation();

    const language = useLanguageStore((state) => state.language);

    const shapeStyleEn = (index === 0 || index === 3)?'w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] right-[-15%] lg:right-[-20%] bg-white content-card-shape': 'w-[200px] h-[200px] right-[-15%] lg:right-[-15%] bg-black content-card-shape';
    const shapeStyleAr = (index === 0 || index === 3)?'w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] left-[-15%] lg:left-[-20%] bg-white content-card-shape-ar': 'w-[200px] h-[200px] left-[-15%] lg:left-[-15%] bg-black content-card-shape-ar';
    const shapeStyle = (language === 'en')? shapeStyleEn: shapeStyleAr;

    const imageContainerStyleEn = (index === 0 || index === 3)?'w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] right-[0%] lg:right-[-100px]': 'w-[200px] h-[200px] right-[0%] lg:right-[-20px]';
    const imageContainerStyleAr = (index === 0 || index === 3)?'w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] left-[0%] lg:left-[-100px]': 'w-[200px] h-[200px] left-[0%] lg:left-[-20px]';
    const imageContainerStyle = (language === 'en')? imageContainerStyleEn: imageContainerStyleAr;

    return (
        <div className={`relative duration-300 overflow-hidden p-5 rounded-[20px] shadow-md ${(index === 0 || index === 3)? 'h-[200px] lg:h-[300px] bg-[#eee]': 'h-[200px] bg-__yellow'} ${(index === 3)? 'lg:translate-y-[-100px]': ''} cursor-pointer content-card z-10`}>
            <p className="relative z-[2] font-bold">{content.title}</p>
            <span className="underline text-[.8rem] content-card-see-more duration-300">{t("SeeMore")}</span>
            <p className={`${(index === 0 || index === 3)? 'mt-0 lg:mt-5': 'mt-0'} relative z-[2] duration-1000 opacity-0 content-card-description w-[60%] md:w-[75%] lg:w-[60%]`}>{content.description}</p>
            <div className={`absolute duration-500 flex items-center bottom-0 z-[1] ${shapeStyle} rounded-full`}/>
            <div className={`absolute duration-500 flex items-center bottom-0 z-[2] ${imageContainerStyle}`}>            
                <img src={content.image} alt={generateAltImageText(content.image)} className={`w-full h-full ${(index === 0 || index === 3)? 'lg:w-[70%]':'lg:w-[100%]'}`}/>
            </div>
        </div>
    );
}
const Content = () => {
    const { t } = useTranslation();

    const CONTENT = [
        {
            title: t("ContentTitle1"),
            image: BoyWithLaptop,
            description: t("ContentDesc1")
        },
        {
            title: t("ContentTitle2"),
            image: GirlWithBooks,
            description: t("ContentDesc2")
        },
        {
            title: t("ContentTitle3"),
            image: FormalGirl,
            description: t("ContentDesc3")
        },
        {
            title: t("ContentTitle4"),
            image: BoyWithBook,
            description: t("ContentDesc4")
        },
    ];

    return (
        <section className="w-full bg-white py-5">
            <Title title={t('OurContent')}/>
            <div className="text-[1.3rem] mb-5">
                <p className="opacity-80 text-[1.1rem]">{t("ContentText")}</p>
            </div>
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