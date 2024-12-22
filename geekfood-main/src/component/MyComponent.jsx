import CardSection from "./CardSection/CardSection";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/Hero"
import HeroSection2 from "./HeroSection2/HeroSection2";
 
const MyComponent = () => {
    return (
        <div>
            <Header />   
            <HeroSection /> 
            <HeroSection2 /> 
            <CardSection />   
            <Footer />
        </div>
    )
}

export default MyComponent;