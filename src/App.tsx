import './App.css'
// import gradientbg from './assets/gradient.png'
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Clients from "./components/Clients.tsx";
import ApproachSection from "./components/ApproachSection.tsx";
import InvestmentFocus from "./components/InvestmentFocus.tsx";
import PortfolioCompanies from "./components/PortfolioCompanies.tsx";
import OurTeam from "./components/OurTeam.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {

    return (
        <main>
            {/*<img className={"absolute top-0 right-0 opacity-60 -z-10"} src={gradientbg} alt=""/>*/}
            {/*<div className={"h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"}></div>*/}
            <Header/>
            <Hero/>
            <Clients/>
            <About/>
            <ApproachSection/>
            <InvestmentFocus/>
            <PortfolioCompanies/>
            <OurTeam/>
         <Contact/>
            <Footer/>
        </main>

    )
}

export default App
