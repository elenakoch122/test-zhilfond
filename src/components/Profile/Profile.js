import style from './Profile.module.css';
import nofoto from '../../assets/images/no-foto-big.png';
import { useContext } from 'react';
import { UsersContext } from '../../context/context';

export default function Profile() {
  const { users } = useContext(UsersContext);

  return (
    <article className={`${style.profile} ${users.active ? '' : style.empty}`}>
      {users.active ? (
        <>
          <div className={style.profile__img__wrapper}>
            <img className={style.profile__img} src={nofoto} alt="" />
          </div>

          <div className={style.profile__content}>
            <h2 className={style.profile__content__name}>{users.active.name}</h2>

            <p className={style.profile__content__info}>
              <span>email:</span> {users.active.email}
            </p>

            <p className={style.profile__content__info}>
              <span>phone:</span> {users.active.phone}
            </p>

            <p className={style.profile__content__info}>
              <span className={style.profile__content__info__about}>О себе:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio error necessitatibus, quia culpa ex veritatis a provident quas debitis minus deserunt, ipsam reprehenderit eum sequi. Architecto ducimus odit deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi non iste culpa dolorem suscipit inventore reiciendis fugiat tempore? Accusantium ullam facere laudantium itaque eaque eius eligendi recusandae qui repellat!
            </p>
          </div>
        </>
      ) : (
        <div className="text">Выберите сотрудника, чтобы посмотреть его профиль</div>
      )}      
    </article>
  );
}