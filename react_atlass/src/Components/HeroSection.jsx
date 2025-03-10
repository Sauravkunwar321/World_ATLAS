import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router";

export const HeroSection = () => {
    return(
        <main className="hero-section main">
                <div className="container grid grid-two-cols">
    
                    <div className="hero-content">
                        <h1 className="heading-xl">
                            Explore the World, One Country at a Time.
                        </h1>
                        <p className="paragraph">
                            Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the deyails you need.
                        </p>
                        <NavLink to="/country">  <button className="btn btn-darken btn-inline bg-white-box">
                            Start Exploring <FaLongArrowAltRight/>
                        </button></NavLink>
                    </div>
                    <div className="hero-image">
                        <img src="/images/world.png" alt="world beautiful" className="banner-image" />
                    </div>
    
                </div>
            </main>

    )
    
}