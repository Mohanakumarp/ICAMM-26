import './home.css';

import Committee from '../Comitte/comittee';
import Domain from '../Domin/domain';
import Speaker from '../Speaker/speakers';
import Hero from '../../Components/Hero/hero';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <Committee />
            <Speaker />
            <Domain/>
        </div>
    );
};

export default Home;