import styles from "./landing.module.scss";
import SocialMedia from "../../components/SocialMedia";
import CTACardList from "../../components/CTACardList";

import MainPhoto from "../../assets/images/landing/main-photo-square-3.jpg";
import StartupCTAPhoto from "../../assets/images/landing/startups.jpg";
import SoftwareCTAPhoto from "../../assets/images/landing/software.jpg";
import HardwareCTAPhoto from "../../assets/images/landing/hardware.jpg";
import CTAButton from "../../components/CTAButton";
import PlanetScenePortal from "../../components3d/Planet/PlanetScenePortal";
import Link from "../../components/Link";

function Landing({ onClick }) {
    const showCtaButtons = false;
    const showMeetingLink = false;

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
                    <PlanetScenePortal />
                </div>
            </div>
            <div className={styles["right"]}>
                <SocialMedia />
                <div className={styles["main-container"]}>
                    <CTACardList onClick={onClick} />
                    <div className={styles["cta-resume"]}>
                        {showMeetingLink && (
                            <Link
                                urlLabel="Scheduling link for a quick call"
                                url="https://app.slated.ai/meet/cjishnu/30-min-appointment"
                                className={styles["landing-link"]}
                            />
                        )}
                        <Link
                            urlLabel="Email at c.jishnu@gmail.com"
                            url={`mailto:c.jishnu@gmail.com?subject=Hello from ${window.location.hostname}&body= Hi, `}
                            className={styles["landing-link"]}
                        />
                        <Link
                            urlLabel="Download resume"
                            download="Resume - Jishnu Choyi"
                            url="./downloads/Resume - Jishnu Choyi.pdf"
                            className={styles["landing-link"]}
                        />
                    </div>
                    {showCtaButtons && (
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
                    )}
                </div>
            </div>
        </div>
    );
}
export default Landing;
