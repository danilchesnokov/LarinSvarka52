import tg from '../Images/telegram_logo.png'

export default function Footer(){
    return(
        <footer className="footer">
            <p>Сязаться с нами</p>
            <nav>
                <ul className='footer__list'>
                    <li>
                        <a href="tel:+79398040652">+7-939-804-06-52 (Михаил)</a>
                    </li>
                    <li>
                        <a href="https://t.me/avtaz52"><img className='footer__img' src={tg} alt='Телеграм'/></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}