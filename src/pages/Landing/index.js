import './styles.scss';
import SocialMedia from '../../components/SocialMedia';
import CTACardList from '../../components/CTACardList';

import MainPhoto from '../../assets/images/landing/main-photo.jpg';
import StartupCTAPhoto from '../../assets/images/landing/startups.jpg';
import SoftwareCTAPhoto from '../../assets/images/landing/software.jpg';
import HardwareCTAPhoto from '../../assets/images/landing/hardware.jpg';


function Landing() {

    return (
        <div className="page-container">
            <div className="left">
                <div className="main-title">hello, I am <br />jishnu choyi</div>
                <div className="main-image">
                    <img src={MainPhoto} />
                </div>
            </div>
            <div className="right">
                <SocialMedia />
                <CTACardList />
                <div className="cta-images">
                    <img src={StartupCTAPhoto} />
                    <img src={SoftwareCTAPhoto} />
                    <img src={HardwareCTAPhoto} />
                </div>
            </div>
        </div>
    );
}
export default Landing;