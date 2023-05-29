import logo from '../Images/Svarka-logo.png'

export default function Header () {
    return(
        <header className='header'>
            <h2 className='header__title'>Навесы в Нижнем Новгороде</h2>
            <img className='header__logo' src={logo} alt='логотип'/>
        </header>      
    )
}