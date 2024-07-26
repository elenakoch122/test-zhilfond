import style from './Sidebar.module.css';
import UsersList from '../UsersList/UsersList';
import { Oval } from 'react-loader-spinner';
import { useContext, useEffect } from 'react';
import { UsersContext } from '../../context/context';

export default function Sidebar() {
  const { users, setUsers } = useContext(UsersContext);

  const onInputChange = (e) => {
    const { value } = e.target;
    setUsers(prev => ({ ...prev, search: value }));    
  };

  useEffect(() => {
    setUsers(prev => ({ ...prev, isLoading: true })); 
    const query = users.search.split(',').map(i => (Number.isFinite(+i) ? 'id=' : 'username=') + i.trim()).join('&');

    fetch(`https://jsonplaceholder.typicode.com/users?${query}`)
      .then(response => response.json())
      .then(data => {
        data.length === 0 ? setUsers(prev => ({ ...prev, list: null })) : setUsers(prev => ({ ...prev, list: data }));
      });

    setUsers(prev => ({ ...prev, isLoading: false }));
  }, [setUsers, users.search]);

  return (
    <form className={style.searchForm}>
      <label className={style.searchForm__title} htmlFor="search">Поиск сотрудников</label>
      <input
        className={style.searchForm__input}
        type="text"
        id="search"
        value={users.search}
        onChange={onInputChange}
        placeholder="Введите Id или имя"
      />

      <h2 className={style.searchForm__title}>Результаты</h2>
      <div className={`${style.searchForm__results} text`}>
        {users.isLoading ? (
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
        ) : (
          users.list ? <UsersList list={users.list} /> : users.search ? 'ничего не найдено' : 'начните поиск'
        )}
      </div>
    </form>    
  );
}