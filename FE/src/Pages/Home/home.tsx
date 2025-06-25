import './home.css';
import Committee from './comittee';
import Speakers from './speakers';
import Domain from './domain';


const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to ICAMM'26</h1>
                <p>International Conference on Applied Mathematics and Mechanics 2026</p>
            </header>

            <section className="home-content">
                <div className="home-intro">
                    <h2>About the Conference</h2>
                    <p>
                        ICAMM'26 brings together researchers, scientists, and engineers from around
                        the world to discuss the latest developments in applied mathematics and mechanics.
                    </p>
                    <button className="register-button">Register Now</button>
                </div>

                <div className="home-highlights">
                    <h2>Conference Highlights</h2>
                    <ul>
                        <li>Keynote speakers from leading institutions</li>
                        <li>Workshops and tutorial sessions</li>
                        <li>Poster presentations</li>
                        <li>Networking opportunities</li>
                    </ul>
                </div>

                <div className="important-dates">
                    <h2>Important Dates</h2>
                    <div className="dates-grid">
                        <div className="date-item">
                            <h3>Abstract Submission</h3>
                            <p>January 15, 2026</p>
                        </div>
                        <div className="date-item">
                            <h3>Registration Deadline</h3>
                            <p>March 1, 2026</p>
                        </div>
                        <div className="date-item">
                            <h3>Conference Dates</h3>
                            <p>June 10-14, 2026</p>                        </div>
                    </div>
                </div>            </section>

            {/* Domain Section */}
            

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