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
    let ariaLabel = "Open link from icon";
    switch (iconName) {
        case "twitter":
            ariaLabel = "Open Twitter profile link";
            break;
        case "linkedin":
            ariaLabel = "Open LinkedIn profile link";
            break;
        case "call":
            ariaLabel = "Start a phone call";
            break;
        case "github":
            ariaLabel = "Open Github profile link";
            break;
        case "email":
            ariaLabel = "Open email client";
            break;
        default:
            ariaLabel = "Open link from icon";
            break;
    }

    return (
        <a
            href={url}
            aria-label={ariaLabel}
            target="_blank"
            rel="noreferrer"
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
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
