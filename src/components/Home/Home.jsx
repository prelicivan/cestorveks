import About from "../About/About";
import Footer from "../Footer/FooterContact";
import Hero from "../Hero/Hero";
import Partners from "../Partners/Partners";

function Home() {
    return (
        <div className="home">
            <Hero />
            {/* <Statement /> */}
            <About />
            <Partners />
            <Footer />
        </div>
    )
}

export default Home;