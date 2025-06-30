import Choose from "../../Componets/Home/Choose";
import CTA from "../../Componets/Home/CTA";
import Features from "../../Componets/Home/Feauter";
import Hero from "../../Componets/Home/Hero";
import Service from "../../Componets/Home/Service";
import Testimonial from "../../Componets/Home/Testimonial";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Service></Service>
            <Features></Features>
            <Testimonial></Testimonial>
            <Choose>   </Choose>
            <CTA></CTA>
        </div>
    );
};

export default Home;