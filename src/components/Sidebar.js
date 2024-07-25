import style from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={style.search}>
      <form className={style.search__form}>
        <label className={style.search__form__label} htmlFor="search">Поиск сотрудников</label>
        <input type="text" id="search"/>
      </form>

    </div>
  );
}