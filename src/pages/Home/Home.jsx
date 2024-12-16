import About from "../../components/About/About"
import Hero from "../../components/Hero/Hero"
import Content from "../../components/Content/Content"
import Contact from "../../components/Contact/Contact"

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero/>
            <div className="mb-16" id="about"/>
            <About/>
            <div className="mb-16" id="content"/>
            <Content/>
            <Contact/>
        </div>
    )
}

export default Home