import { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../context/context';
import { Oval } from 'react-loader-spinner';
import UsersList from './UsersList';

export default function Sidebar() {
  const { users, setUsers } = useContext(UsersContext);
  const [isError, setIsError] = useState(false);

  const onInputChange = (e) => {
    const { value } = e.target;
    value ? setUsers(prev => ({ ...prev, search: value })) : setUsers(prev => ({ ...prev, search: value, active: null }));    
  };

  useEffect(() => {
    setUsers(prev => ({ ...prev, isLoading: true })); 
    const query = users.search.split(',').map(i => (Number.isFinite(+i) ? 'id=' : 'username=') + i.trim()).join('&');

    fetch(`https://jsonplaceholder.typicode.com/users?${query}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Ошибка!');
      })
      .then(data => {
        data?.length === 0 ? setUsers(prev => ({ ...prev, list: null })) : setUsers(prev => ({ ...prev, list: data }));
      })
      .catch((e) => setIsError(true))
      .finally(() => setUsers(prev => ({ ...prev, isLoading: false })));
  }, [setUsers, users.search]);

  return (
    <form className="searchForm">
      <label className="searchForm__title" htmlFor="search">Поиск сотрудников</label>
      <input
        className="searchForm__input"
        type="text"
        id="search"
        value={users.search}
        onChange={onInputChange}
        placeholder="Введите Id или имя"
      />

      <h2 className="searchForm__title">Результаты</h2>
      <div className="searchForm__results text">
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
          isError ? (
            <p className="searchForm__error">Ошибка! Попробуйте изменить запрос.</p>
          ) : (
            users.list ? <UsersList list={users.list} /> : users.search ? 'ничего не найдено' : 'начните поиск'
          )
        )}
      </div>
    </form>    
  );
}