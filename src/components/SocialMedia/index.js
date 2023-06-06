import './styles.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import GitHubIcon from '@mui/icons-material/GitHub';


function SocialMedia() {
    return (
        <div className="social-media-header">
            <div className="icon-container">
                <TwitterIcon color="primary" fontSize='medium' />
                <LinkedInIcon color="primary" fontSize='medium' />
                <EmailRoundedIcon color="primary" fontSize='medium' />
                <CallRoundedIcon color="primary" fontSize='medium' />
                <GitHubIcon color="primary" fontSize='medium' />
            </div>
        </div>
    );
}
export default SocialMedia;