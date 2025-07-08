import './home.css';
import Committee from './comittee';
import Speakers from './speakers';
import Domain from './domain';
import Hero from '../../Components/Hero/hero';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            {/* Committee Section */}
            <div className="committee-section-wrapper">
                <Committee />
            </div>

            {/* Speakers Section */}
            <div className="speakers-section-wrapper">
                <Speakers />
            </div>

            <div className="domain-section-wrapper">
                <Domain />
            </div>
        </div>
    );
};

export default Home;