import Link from "../Link";
import SocialMedia from "../SocialMedia";
import styles from "./footer.module.scss";
import React from "react";

function Footer() {
    return (
        <div className={styles.footer}>
            <blockquote>
                “If I have seen further, it is by standing on the shoulders of
                giants.” -{" "}
                <Link
                    urlLabel="Sir Isaac Newton"
                    url="https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants"
                />
            </blockquote>
            <div className={styles.credits}>
                <div className={styles["credit-title"]}>
                    Credits & attributions
                </div>
                <div className={styles["credit-item"]}>
                    <Link
                        url="https://sketchfab.com/3d-models/space-exploration-wlp-series-8-91964c1ce1a34c3985b6257441efa500"
                        urlLabel="Space Exploration"
                    />{" "}
                    by 3D Artist{" "}
                    <Link
                        url="https://sketchfab.com/shapernode"
                        urlLabel="sketchfab/shapernode"
                    />{" "}
                    <Link
                        urlLabel="(Creative Commons 4.0)"
                        url="https://creativecommons.org/licenses/by/4.0/"
                    />
                </div>
                <div className={styles["credit-item"]}>
                    <Link
                        url="https://github.com/mnmxmx/fluid-three"
                        urlLabel="Stable Fluids"
                    />{" "}
                    by Programmer & Visual Artist{" "}
                    <Link
                        url="https://twitter.com/misaki_mofu"
                        urlLabel="Misaki Nakano"
                    />{" "}
                    <Link
                        urlLabel="MIT License"
                        url="https://en.wikipedia.org/wiki/MIT_License"
                    />
                </div>
                <div className={styles["credit-title"]}>Reading</div>
                <div className={styles["credit-item"]}>
                    <Link
                        urlLabel="Pigment based color mixing"
                        url="https://scrtwpns.com/mixbox/docs/"
                    />
                </div>
            </div>
            <div style={{ paddingBottom: "64px" }}>
                <SocialMedia />
            </div>
        </div>
    );
}

export default Footer;
