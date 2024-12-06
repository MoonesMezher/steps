import About from "../../components/About/About"
import Hero from "../../components/Hero/Hero"
import Content from "../../components/Content/Content"
import Contact from "../../components/Contact/Contact"

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero/>
            <About/>
            <Content/>
            <Contact/>
        </div>
    )
}

export default Home