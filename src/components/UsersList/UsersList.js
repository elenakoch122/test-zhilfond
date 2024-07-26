import style from './UsersList.module.css';
import UsersItem from './UsersItem/UsersItem';

export default function UsersList({ list }) {
  return (
    <ul className={style.list}>
      {list.map(u => (
        <li className={style.item} key={u.id}>
          <UsersItem user={u} />
        </li>
      ))}
    </ul>
  );
}