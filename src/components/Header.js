import logo from '../Images/Svarka-logo.png'

export default function Header () {
    return(
        <header className='header'>
            <img className='header__logo' src={logo} alt='логотип'/>
            <h2 className='header__title'>Навесы в Нижнем Новгороде</h2>
        </header>      
    )
}