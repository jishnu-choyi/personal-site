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
import PlanetScenePortal from "../../components3d/Planet/PlanetScenePortal";

function Landing() {
    return (
        <div className={styles["page-container"]}>
            <div className={styles["left"]}>
                <div className={styles["main-title"]}>
                    <div className={styles["line1"]}>
                        <span>hello world,</span> <br />I am jishnu choyi
                    </div>
                    <div className={styles["line2"]}>
                        full stack programmer with a flair for frontend
                    </div>
                </div>
                <div
                    // style={{ background: "yellow" }}
                    className={
                        styles["main-container"] + " " + styles["main-image"]
                    }
                >
                    <div className={styles["main-img"]}>
                        <img
                            src={MainPhoto}
                            alt="dummy"
                            style={{ visibility: "hidden" }}
                        ></img>
                    </div>
                    {/* <PlanetScene /> */}
                    <PlanetScenePortal />
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
