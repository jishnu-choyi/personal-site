import './styles.scss';
import Logo from '../../assets/images/logos/logo-outline-transparent.png';

function Header() {
    return (
        <div className="header">
            <img src={Logo} />
        </div>
    );
}
export default Header;
