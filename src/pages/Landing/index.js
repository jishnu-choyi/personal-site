import styles from "./landing.module.scss";
import SocialMedia from "../../components/SocialMedia";
import CTACardList from "../../components/CTACardList";

import MainPhoto from "../../assets/images/landing/main-photo-square-3.jpg";
import StartupCTAPhoto from "../../assets/images/landing/startups.jpg";
import SoftwareCTAPhoto from "../../assets/images/landing/software.jpg";
import HardwareCTAPhoto from "../../assets/images/landing/hardware.jpg";
import CTAButton from "../../components/CTAButton";
import CubeScene from "../../components3d/CubeScene";
import PlanetScene from "../../components3d/Planet";

function Landing() {
    return (
        <div className={styles["page-container"]}>
            <div className={styles["left"]}>
                <div className={styles["main-title"]}>
                    hello, I am <br />
                    jishnu choyi
                </div>
                {/* <div className={styles["main-container"] + ' ' + styles["main-image"]}>
                    <img src={MainPhoto} alt='working desk' />
                </div> */}
                <div
                    className={
                        styles["main-container"] + " " + styles["main-image"]
                    }
                >
                    {/* <CubeScene /> */}
                    <PlanetScene />
                </div>
            </div>
            <div className={styles["right"]}>
                <SocialMedia />
                <div className={styles["main-container"]}>
                    <CTACardList />
                    <div className={styles["cta-images"]}>
                        <CTAButton
                            imageSrc={StartupCTAPhoto}
                            btnTxt={"start-ups"}
                        />
                        <CTAButton
                            imageSrc={SoftwareCTAPhoto}
                            btnTxt={"software"}
                        />
                        <CTAButton
                            imageSrc={HardwareCTAPhoto}
                            btnTxt={"hardware"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing;
