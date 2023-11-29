import './home.styles.scss'
import LogoTitle from '../../assets/images/logo-lines.svg'


const HomePage = () => {
    
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <img src={LogoTitle} alt="developer"></img>
            </div>
        </div>
    )
}

export default HomePage;