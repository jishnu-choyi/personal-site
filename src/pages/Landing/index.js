import './styles.scss';
import SocialMedia from '../../components/SocialMedia';
import CTACardList from '../../components/CTACardList';

import MainPhoto from '../../assets/images/landing/main-photo-square-3.jpg';
import StartupCTAPhoto from '../../assets/images/landing/startups.jpg';
import SoftwareCTAPhoto from '../../assets/images/landing/software.jpg';
import HardwareCTAPhoto from '../../assets/images/landing/hardware.jpg';
import CTAButton from '../../components/CTAButton';


function Landing() {

    return (
        <div className="page-container">
            <div className="left">
                <div className="main-title">hello, I am <br />jishnu choyi</div>
                <div className="main-container main-image">
                    <img src={MainPhoto} alt='working desk' />
                </div>
            </div>
            <div className="right">
                <SocialMedia />
                <div className="main-container">
                    <CTACardList />
                    <div className="cta-images">
                        <CTAButton imageSrc={StartupCTAPhoto} btnTxt={"start-ups"} />
                        <CTAButton imageSrc={SoftwareCTAPhoto} btnTxt={"software"} />
                        <CTAButton imageSrc={HardwareCTAPhoto} btnTxt={"hardware"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing;