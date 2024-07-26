import UsersItem from './UsersItem';

export default function UsersList({ list }) {
  return (
    <ul className="userslist__list">
      {list.map(u => (
        <li className="userslist__item" key={u.id}>
          <UsersItem user={u} />
        </li>
      ))}
    </ul>
  );
}