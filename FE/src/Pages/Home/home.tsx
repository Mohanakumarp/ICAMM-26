import './home.css';

import Committee from '../Comitte/comittee';
import Domain from '../Domin/domain';
import Speaker from '../Speaker/speakers';
import Dates from '../dates/dates';
import Details from '../details/details';
import Registration from '../registration/registration';
import Payment from '../payment/payment';
import Hero from '../../Components/Hero/hero';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <Committee />
            <Speaker />
            <Domain/>
            <Dates />
            <Details />
            <Registration />
            <Payment />
        </div>
    );
};

export default Home;