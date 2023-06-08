import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                Happy Trails Camp | Home
                </title>
            </Helmet>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <PopularInstructor></PopularInstructor>
           {/* TO DO: EXTRA SECTION */}
            
        </div>
    );
};

export default Home;