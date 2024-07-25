import UsersItem from './UsersItem/UsersItem';
import style from './UsersList.module.css';

export default function UsersList() {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <UsersItem />
      </li>

      <li className={style.item}>
        <UsersItem />
      </li>

      <li className={style.item}>
        <UsersItem />
      </li>
    </ul>
  );
}