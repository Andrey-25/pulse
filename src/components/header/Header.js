import './header.scss';
import logo from '../../resources/icons/logo.png';
import timer from '../../resources/icons/019_timer_time_stopwatch_2-64.png';
import handCurt from '../../resources/icons/app-08-hand-cart-64.png';
import messege from '../../resources/icons/messages-64.png';

const Header = () => {
    return (
        <div className="promo">
            <div className="container">
                <div className="header">
                    <a href="#" className="header__logo">
                        <img src={logo} alt="" className="header__logo--img" />
                    </a>

                    <div className="header__oficial">
                        Официальный представитель
                        <span>
                            Garmin, Polar, Suunto
                        </span>
                    </div>

                    <div className="header__contacts">
                        <a href="tel:+74999228974" className="header__phone">
                            +7 (499) 922-89-74
                        </a>
                        <button className='button button_header'>
                            заказать звонок
                        </button>
                    </div>
                </div>

                <div className="promo__wrapper">
                    <h1 className="promo__header">
                        Подбор пульсометра
                    </h1>
                    <h2 className="promo__subheader">
                        с учётом Вашего уровня подготовки
                    </h2>

                    <div className="promo__icons">

                        <div className="promo__icon">
                            <img src={timer} alt="timer" />
                            Время подбора:10 минут
                        </div>

                        <div className="promo__icon">
                            <img src={handCurt} alt="hand curt" />
                            Бесплатная доставка
                        </div>

                        <div className="promo__icon">
                            <img src={messege} alt="messege" />
                            Ответим на все вопросы
                        </div>

                    </div>

                    <button className="button_main button">заказать КОНСУЛЬТАЦИЮ</button>
                    <div className="promo__link">
                        или <a href='#'> ПЕРЕЙТИ В КАТАЛОГ</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;