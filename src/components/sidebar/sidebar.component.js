import './sidebar.styles.scss'
import  LogoS  from '../../assets/images/logo-s.png';
import  LogoSubtitle  from '../../assets/images/logo_sub.png';
import { Link } from 'react-router-dom';

const SidebarComponent = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'></img>
            <img src={LogoSubtitle} alt='logo'></img>
        </Link>
    </div>
);

export default SidebarComponent;