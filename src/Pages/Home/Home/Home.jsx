import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import './Home.css'
import { Fade, AttentionSeeker, Slide } from "react-awesome-reveal";
import FAQ from "../FAQ/FAQ";

const Home = () => {
    return (
        <div className="home">
            <Helmet>
                <title>
                    Happy Trails Camp | Home
                </title>
            </Helmet>
            <Fade>
                <Banner></Banner>
            </Fade>
            {/* <AttentionSeeker animate__backInDown>
                <Banner></Banner>
            </AttentionSeeker> */}
            {/* Popular class and instructors are retrieved from dummy class  */}
            <AttentionSeeker animate__lightSpeedInRight>
                <PopularClasses></PopularClasses>
            </AttentionSeeker>
            <AttentionSeeker animate__slideInLeft>
                <PopularInstructor></PopularInstructor>
            </AttentionSeeker>
            <Slide>
                <div className="my-10">
                    <FAQ></FAQ>

                </div>
            </Slide>





            {/* TO DO: EXTRA SECTION */}

        </div>
    );
};

export default Home;