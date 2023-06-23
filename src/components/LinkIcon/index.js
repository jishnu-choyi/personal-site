import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import GitHubIcon from "@mui/icons-material/GitHub";

function LinkIcon({ url, iconName }) {
    const [active, setActive] = useState(false);
    const handleMouseEnter = () => {
        setActive(true);
    };
    const handleMouseLeave = () => {
        setActive(false);
    };

    return (
        <a
            href={url}
            target="_blank"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {iconName === "twitter" && (
                <TwitterIcon
                    color={active ? "hoverBlue" : "primary"}
                    fontSize="medium"
                />
            )}
            {iconName === "linkedin" && (
                <LinkedInIcon
                    color={active ? "hoverBlue" : "primary"}
                    fontSize="medium"
                />
            )}
            {iconName === "email" && (
                <EmailRoundedIcon
                    color={active ? "hoverBlue" : "primary"}
                    fontSize="medium"
                />
            )}
            {iconName === "call" && (
                <CallRoundedIcon
                    color={active ? "hoverBlue" : "primary"}
                    fontSize="medium"
                />
            )}
            {iconName === "github" && (
                <GitHubIcon
                    color={active ? "hoverBlue" : "primary"}
                    fontSize="medium"
                />
            )}
        </a>
    );
}

export default LinkIcon;
