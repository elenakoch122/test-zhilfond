import style from './Sidebar.module.css';
import UsersList from '../UsersList/UsersList';
import { Oval } from 'react-loader-spinner';

export default function Sidebar() {
  return (
    <form className={style.searchForm}>
      <label className={style.searchForm__title} htmlFor="search">Поиск сотрудников</label>
      <input className={style.searchForm__input} type="text" id="search" placeholder="Введите Id или имя" />

      <h2 className={style.searchForm__title}>Результаты</h2>
      <div className={`${style.searchForm__results} text`}>
        {/* {есть результат ? <UsersList /> : 'ничего не найдено'} */}
        {/* начните поиск */}
        {/* <UsersList /> */}
        <Oval
          visible={true}
          height="50"
          width="50"
          color="#E31F24"
          secondaryColor="#76787D"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </form>
  );
}