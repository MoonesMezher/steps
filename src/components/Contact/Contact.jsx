import Title from "../shared/Title/Title"
import GirlWhatsup from '../../assets/images/girl-whatsup.webp'
import GirlInsta from '../../assets/images/girl-insta.webp'
import GirlSocial from '../../assets/images/girl-social-meida.webp'
import ScrollAnimation from "react-animate-on-scroll"
import Extra from "../shared/Extra/Extra"
import { useTranslation } from "react-i18next"
import useLanguageStore from "../../stores/language"
import generateAltImageText from "../../helpers/generateAltImageText"

const Contact = () => {
    const { t } = useTranslation();

    const language = useLanguageStore((state) => state.language);

    return (
        <section className="w-full bg-white py-5 lg:mt-[-100px]">
            <div className="w-fit mx-auto relative">
                <p className={`font-bold text-[2rem] min-[820px]:text-[3rem] absolute text-stroke ${language === 'en'? 'left-0 min-[820px]:left-[-150px]': "right-0 min-[820px]:right-[-150px]"}  top-0 z-[11]`}>{t("MakeYour")} <br/> {t("SocialMedia")}</p>
                <p className={`font-bold text-[2rem] min-[820px]:text-[3rem] absolute text-stroke ${language === 'en'? 'right-0 min-[820px]:right-[-130px]': "left-0 min-[820px]:left-[-130px]"} bottom-0 z-[11]`}>{t("More")} <br/> {t("Valueable")}</p>
                <div className="w-full min-[450px]:w-[400px] min-[450px]:h-[400px] mx-auto p-5 rounded-full bg-__yellow shadow-md mb-10 flex justify-center items-center overflow-hidden relative">
                    <div className="w-[100%] h-[100%] relative z-10">
                        <img src={GirlSocial} alt={generateAltImageText(GirlSocial)} className="w-full h-full"/>
                    </div>
                    <Extra key={9} size={'w-[150px] h-[150px]'} xPoint={"left-[0%]"} yPoint={"top-[0%]"}/>
                    <Extra key={10} size={'w-[40px] h-[40px]'} xPoint={"right-[15%]"} yPoint={"top-[15%]"}/>
                    <Extra key={11} size={'w-[100px] h-[100px]'} xPoint={"left-[5%]"} yPoint={"top-[31%]"}/>
                    <Extra key={12} size={'w-[50px] h-[50px]'} xPoint={"right-[5%]"} yPoint={"top-[50%]"}/>
                    <Extra key={13} size={'w-[20px] h-[20px]'} xPoint={"left-[10%]"} yPoint={"top-[60%]"}/>
                </div>
            </div>
            <div className="mb-16" id="contact"/>
            <Title title={t('ContactUs')} center={true}/>
            <div className="text-center text-[1.3rem]">
                <p className="mb-2">{t("ContactHeader")}</p>
                <p className="opacity-80 text-[1.1rem]">{t("ContactHeaderText")}</p>
            </div>
            <div className="flex flex-col min-[400px]:flex-row  items-center justify-center gap-5 sm:gap-10 my-5">
                <ScrollAnimation animateIn="slideInLeft" className="md:w-[40%]" animateOnce={true}>
                    <div className="mx-auto sm:w-[90%] relative overflow-hidden">
                        <img src={GirlInsta} alt={generateAltImageText(GirlInsta)} className="w-full h-full"/>
                        <a href="/" target="_blank" className="absolute h-fit duration-300 sm:hover:scale-105 left-[40%] sm:left-[10px] bottom-0 sm:top-[10px] text-center px-3 py-2 sm:px-5 sm:py-4 font-bold bg-black text-white rounded-md">
                            {t("VisitNow")}
                        </a>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInRight" className="md:w-[40%]" animateOnce={true}>
                    <div className="mx-auto sm:w-[90%] relative overflow-hidden">
                        <img src={GirlWhatsup} alt={generateAltImageText(GirlWhatsup)} className="w-full h-full"/>
                        <a href="/" target="_blank" className="absolute h-fit duration-300 sm:hover:scale-105 right-[40%] sm:right-[10px] bottom-0 sm:top-[10px] text-center px-3 py-2 sm:px-5 sm:py-4 font-bold bg-black text-white rounded-md">
                            {t("CallNow")}
                        </a>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default Contact