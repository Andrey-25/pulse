import './advantage.scss';
import cup from '../../resources/icons/cup.png';
import heart from '../../resources/icons/heart.png';
import shoe from '../../resources/icons/shoe.png';

const Advantage = () => {
    return (
        <div className="advantage">
            <div className="container">
                <h2 className="advantage__header">
                    НАШИ ПРЕИМУЩЕСТВА
                </h2>
                <div className="advantage__list">
                    <div className="advantage__wrapper">
                        <img src={cup} alt="cup" className='advantage__img' />
                        <div className="advantage__subheader">
                            Делимся опытом
                        </div>
                        <div className="advantage__title">
                            Наши сотрудники всегда готовы поделиться своим опытом, 
                            так как сами бегают полумарафоны, переплыли Босфор, готовятся
                             к соревнованиям по триатлону!
                        </div>
                    </div>
                    <div className="advantage__wrapper">
                        <img src={heart} alt="heart" className='advantage__img' />
                        <div className="advantage__subheader">
                            Заботимся о здоровье
                        </div>
                        <div className="advantage__title">
                            Мы работаем для того, чтобы Ваши занятия спортом шли на пользу Вашему
                            здоровью и были в радость Вам и Вашим близким!
                        </div>
                    </div>
                    <div className="advantage__wrapper">
                        <img src={shoe} alt="shoe" className='advantage__img' />
                        <div className="advantage__subheader">
                            Учим бегать
                        </div>
                        <div className="advantage__title">
                            Помогаем с обучением правильной технике бега! 
                            Дружим с крупнейшей школой бега в России -<span>I LOVE RUNNING.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantage;