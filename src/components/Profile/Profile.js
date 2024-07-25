import style from './Profile.module.css';
import nofoto from '../../assets/images/no-foto-big.png';

export default function Profile() {
  return (
    // <article className={`${style.profile} ${style.empty}`}>
    <article className={`${style.profile}`}>
      {/* <div className="text">Выберите сотрудника, чтобы посмотреть его профиль</div> */}

      <div className={style.profile__img__wrapper}>
        <img className={style.profile__img} src={nofoto} alt="" />
      </div>

      <div className={style.profile__content}>
        <h2 className={style.profile__content__name}>Ervin Howell</h2>

        <p className={style.profile__content__info}>
          <span>email:</span> Shanna@melissa.tv
        </p>

        <p className={style.profile__content__info}>
          <span>phone:</span> 010-692-6593 x09125
        </p>

        <p className={style.profile__content__info}>
          <div>О себе:</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio error necessitatibus, quia culpa ex veritatis a provident quas debitis minus deserunt, ipsam reprehenderit eum sequi. Architecto ducimus odit deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi non iste culpa dolorem suscipit inventore reiciendis fugiat tempore? Accusantium ullam facere laudantium itaque eaque eius eligendi recusandae qui repellat!
        </p>
      </div>
    </article>
  );
}