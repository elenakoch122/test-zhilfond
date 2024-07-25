import style from './UsersItem.module.css';
import nofoto from '../../../assets/images/no-foto-small.png';
import { useState } from 'react';

export default function UsersItem() {
  const [classes, setClasses] = useState(style.card);

  const onCardClick = () => {
    // добавляем класс active
    // показываем профиль
  };

  return (
    <div className={`${style.card} ${style.card_active}`} onClick={onCardClick}>
      <img className={style.card__avatar} src={nofoto} alt="" />
      <div className={style.card__content}>
        <p className={style.card__content__name}>Bret</p>
        <p className={style.card__content__email}>Sincere@april.biz</p>
      </div>
    </div>
  );
}