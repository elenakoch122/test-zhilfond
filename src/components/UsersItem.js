import nofoto from '../assets/images/no-foto-small.png';
import { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../context/context';

export default function UsersItem({ user }) {
  const initClasses = 'card';
  const [classes, setClasses] = useState(initClasses);

  const { users, setUsers } = useContext(UsersContext);

  useEffect(() => {
    users.active?.id === user.id ? setClasses(prev => prev + ' card_active') : setClasses(initClasses);
  }, [initClasses, user.id, users.active?.id]);

  const onCardClick = () => {
    setUsers(prev => ({ ...prev, active: user}));
  };

  return (
    <div className={classes} onClick={onCardClick}>
      <img className="card__avatar" src={nofoto} alt="Фото пользователя." />
      <div className="card__content">
        <p className="card__content__name">{user.username}</p>
        <p className="card__content__email">{user.email}</p>
      </div>
    </div>
  );
}