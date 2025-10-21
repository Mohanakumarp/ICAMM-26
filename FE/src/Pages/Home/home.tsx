import './home.css';

import Committee from '../Comitte/comittee';
import Domain from '../Domin/domain';
import Speaker from '../Speaker/speakers';
import Dates from '../dates/dates';
import Details from '../details/details';
import Registration from '../registration/registration';
import Payment from '../payment/payment';
import Hero from '../../Components/Hero/hero';
import About from '../About/about';
import PreviousEditions from '../PreviousEditions/PreviousEditions';
const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <About />
            <Committee />
            <Speaker />
            <Domain/>
            <Dates />
            <Details />
            <Registration />
            <Payment />
            {/* <PreviousEditions /> */}

        </div>
    );
};

export default Home;